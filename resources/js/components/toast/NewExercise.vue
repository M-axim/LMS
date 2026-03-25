<template lang="pug">
#newExercise.modal.fade(tabindex='-1' data-bs-backdrop="static" aria-labelledby='newExerciseLabel' aria-hidden='true')
    .modal-dialog.modal-xl.modal-dialog-centered.modal-dialog-scrollable
        .modal-content
            .modal-header
                h1#newExerciseLabel.modal-title.fs-5(v-if="id === null") Новое задание
                h1#newExerciseLabel.modal-title.fs-5(v-else) Изменить задание
            .modal-body
                .row
                    .col-12.col-sm-4.mb-2
                        v-inputSelect(:label="`Категория`" v-model:value="tabId" :rating="tabId" :options="tabList")
                        p.m-0.ms-2.text-danger {{ categoryError }}
                    .col-12.col-sm-4.mb-2
                        v-inputSelect(:label="`Вид задания`" v-model:value="type" :rating="type" :options="myTypeList")
                    .col-12.col-sm-4.mb-2
                        v-inputLine(:label="`Заголовок задания`" v-model:value="exerciseName")
                        p.m-0.ms-2.text-danger {{ titleError }}
                    .col-12.col-sm-4.mb-2(v-if="type == 0 || type == 2")
                        v-inputLine(:label="`Срок выполнения`" :type="`date`" v-model:value="dateEnd")
                        p.m-0.ms-2.text-danger {{ dateEndError }}
                    .col-12.col-sm-4.mb-2(v-if="type == 0")
                        v-inputLine(:label="`кол-во попыток`" :type="`number`" v-model:value="maxAttempt")
                        p.m-0.ms-2.text-danger {{ countAttemptError }}
                    .col-12(v-show="type == 0 || type == 1")
                        QuillEditor(
                            ref="quillEditorInstance"
                            v-model:content="dataProperty"
                            @change="onEditorChange($event)"
                            @ready="onEditorReady($event)")
                    .col-12(v-show="type == 2")
                        #accordionQuizz.accordion
                            .accordion-item.mb-4(v-for="(item, index) in questions" :key="index")
                                h2.accordion-header(:id="`accordionQuizzHeader-${item.id}`")
                                    button.accordion-button.bg-info.text-dark.fs-5.p-3(
                                        type="button"
                                        data-bs-toggle="collapse"
                                        :data-bs-target="`#accordionQuizz-${item.id}`"
                                        aria-expanded="true"
                                        :aria-controls="`accordionQuizz-${item.id}`") Вопрос {{ index + 1 }}
                                .accordion-collapse.collapse(
                                    :id="`accordionQuizz-${item.id}`"
                                    data-bs-parent="#accordionQuizz"
                                    :aria-labelledby="`accordionQuizzHeader-${item.id}`")
                                    .accordion-header
                                        .card
                                            .card-header
                                                label.form-label.w-100.fs-5.text-secondary
                                                    span.ps-2.ms-1.mb-2.d-block Текст вопроса
                                                    input.form-control.form-control-sm.fs-5.border-dark(v-model="item.question")
                                                p.m-0.ms-2.text-danger {{ errorQuestion(item.question) }}
                                            .card-body.row
                                                .col-12.col-sm-6(v-for="(option, optionId) in item.options" :key="optionId")
                                                    label.form-label.w-100.fs-5.text-secondary
                                                        span.ps-2.ms-1.mb-2.d-block Вариант {{ optionId + 1 }}
                                                        input.form-control.form-control-sm.fs-5.border-dark(v-model="item.options[optionId]")
                                                p.m-0.ms-2.text-danger {{ errorOptions(item.id) }}
                                            .card-footer
                                                label.form-label.w-100.fs-5.text-secondary
                                                    span.ps-2.ms-1.mb-2.d-block Ответ
                                                    input.form-control.form-control-sm.fs-5.border-dark(v-model="item.correctOption")
                                                    p.m-0.ms-2.text-danger {{ error(item.id, item.correctOption) }}
                                                button.btn.btn-primary(type='button' @click="deleteQuastion(item.id)") Удалить вопрос

                        button.btn.btn-primary(type='button' @click="newQuastion()") Добавить вопрос
            .modal-footer
                p.m-0.ms-2.text-danger {{ formError }}
                button.btn.btn-primary(type="button" data-bs-dismiss="modal") Закрыть
                button.btn.btn-primary(type='button' @click="checkInput()" v-if="id === null") Добавить
                button.btn.btn-primary(type='button' @click="checkInput()" v-else) Изменить
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { ref } from "vue";

export default {
    components: {
        QuillEditor
    },
    data() {
        return {
            quillEditorInstance: null,  
            id: null,
            exerciseName: "",
            dateEnd: null,
            currentAttempt: "1",
            maxAttempt: 1,
            type: 0,
            tabId: 0,
            date: new Date(),

            exerciseContent: [],
            dataProperty: "",
            tabOptions: [],

            result: "",

            categoryError: "",
            titleError: "",
            dateEndError: "",
            countAttemptError: "",

            myTypeList: [],

            testError: false,

            questionId: 1,
            formError: "",

            questions: [{
                id: 1,
                question: "",
                typeResponse: "select",
                options: ["", "", "", ""],
                correctOption: ""
            }]
        }
    },
    computed: {
        ...mapGetters(["tabList", "typeList", "user", "courseList", "exerciseObject"])
    },
    methods: {
        ...mapMutations(["getTabOptions", "newExercise", "updateClass", "getTypeOptions", "updateExercise"]),
        newQuastion() {
            this.questions.push({
                id: ++this.questionId,
                question: "",
                typeResponse: "select",
                options: ["", "", "", ""],
                correctOption: ""
            })
        },
        deleteQuastion(id) {
            this.questions = this.questions.filter( (e) => e.id !== id) 
        },
        setExerciseMain(e) {
        },
        error(id, answer) {

            if (answer.length === 0) {
                this.testError = true
                return "Строка ответа не должна быть пустая"
            }

            let tmpQuestin = this.questions.find((e) => e.id == id)

            let result = tmpQuestin.options.includes(answer)

            if (result === false) {
                this.testError = true
                return "Нет такого варианта ответа"
            }
            this.testError = false
            return ""
        },
        errorOptions(id) {
            let tmpQuestin = this.questions.find((e) => e.id == id)
            let cnt = 0
            let result = ""
            tmpQuestin.options.map( (e) => { if (e.length !== 0) ++cnt })

            if (cnt < 2) {
                this.testError = true
                return "Должно быть минимум 2 варианта на выбор"
            }
            this.testError = false
            return ""
        },
        errorQuestion(title) {
            if (title.length == 0) {
                this.testError = true
                return "Строка с вопросом не должна быть пустой"
            }
            this.testError = false
            return ""
        },
        cleanError() {
            this.categoryError = ""
            this.titleError = ""
            this.dateEndError = "",
            this.countAttemptError = ""
            this.formError = ""
        },
        cleanField() {
            this.id = null
            this.exerciseName = ""
            this.dateEnd = null
            this.currentAttempt = "1"
            this.maxAttempt = 2
            this.type = 0
            this.tabId = 0
            this.exerciseContent = []
            this.dataProperty = ""
            this.tabOptions = []
            this.$refs.quillEditorInstance.setContents("{}", "user")
        },
        checkInput() {
            this.cleanError()

            if (this.type === 2 || this.type === 1)
                this.maxAttempt = 2

            if (this.type === 0 || this.type === 1) {
                this.result = this.dataProperty
            } 
            else if (this.type === 2) {
                this.result = this.questions
            }

            if (this.type === 0) {
                if (new Date(this.dateEnd) < this.date)
                    this.dateEndError = "Некорретная дата"
            }

            if (this.tabId == 0)
                this.categoryError = "Выберите категорию"
            else if (this.exerciseName.length < 1)
                this.titleError = "Введите заголовок"
            else if (this.type !== 2 && this.maxAttempt < 0)
                this.countAttemptError = "Введите кол-во попыток на сдачу"
            else if (this.testError === true && this.type == 2) {
                this.formError = "Сохранение невозможно, есть ошибки при создании теста"
            }
            else {

                let tmpExercise = {
                    id: this.id,
                    exerciseName: this.exerciseName,
                    dateEnd: this.dateEnd,
                    maxAttempt: this.maxAttempt,
                    type: this.type,
                    exerciseContent: this.result
                }
                
                this.id === null
                ? this.newExercise({courseId: this.$route.params.course_id, tab: this.tabId, exerciseObject: tmpExercise}) 
                : this.updateExercise({courseId: this.$route.params.course_id, tab: this.tabId, exerciseObject: tmpExercise})
                // this.cleanField()
            }

        },
        onEditorReady(QuillEditor) {
            // console.log(QuillEditor.getQuill())
            
           //this.$refs.quillEditorInstance.setContents(this.exerciseContent, "user")
           //console.log(this.exerciseContent);
           // console.log(QuillEditor.getContents())
        },
    },
    async mounted() {
        if (this.user.role == "teacher")
            await this.getTabOptions(this.$route.params.course_id)
        await this.getTypeOptions()
        this.myTypeList = this.typeList.filter( (e) => e.text !== "Тест")

    },
    watch: {
        exerciseObject: function () {
                if (this.exerciseObject !== null) {
                    this.id = this.exerciseObject.id
                    this.exerciseName = this.exerciseObject.exerciseName
                    this.dateEnd = this.exerciseObject.dateEnd
                    this.tabId = this.exerciseObject.tabId
                    this.maxAttempt = this.exerciseObject.maxAttempt
                    this.type = this.exerciseObject.type
                    this.$refs.quillEditorInstance.setContents(this.exerciseObject.exerciseContent.ops, "user")

                    if (this.exerciseObject.type !== 2) {
                        this.exerciseContent = this.exerciseObject.exerciseContent.ops
                    } else {
                        this.questions = this.exerciseObject.exerciseContent
                    }

                } else {
                    this.cleanField()
                }
            },
        courseList: {
            handler(e) {
                if (this.user.role == "teacher")
                    this.getTabOptions(this.$route.params.course_id)
            },
            deep: true
        },
        questions: {
            handler(e) {
                console.log(this.questions);
            },
            deep: true
        },
        tabId: function () {
            if (this.tabList.length !== 0) {
                let currentTab = this.tabList.find( (e) => e.id == this.tabId)
                if (currentTab.type == 2) {
                    this.myTypeList = this.typeList.filter( (e) => e.text == "Тест")
                    this.type = 2
                } else {
                    this.myTypeList = this.typeList.filter( (e) => e.text !== "Тест")
                    this.type = 0
                }
            }


        }
    }
}
</script>

<style lang="scss" scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>