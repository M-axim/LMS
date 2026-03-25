<template lang="pug">
.exercise
    .exercise-header.row
        .exercise-title.col
            h1 {{ dataExercise === null ? "" : dataExercise.exerciseName }}
        .exercise-button.col.m-auto.text-end
            button.btn.btn-secondary(disabled v-if="dataExercise?.currentAttempt >= dataExercise.maxAttempt") Попытки закончились
            button.btn.btn-secondary(@click="retry()" v-else) Новая попытка
            p.m-0.text-danger {{ retryError }}
    hr
    .exercise-settings.row
        .exercise-setting.col.col-4.fs-5(v-for="(setting, index) in exerciseSetting" :key="index")
            span.fw-bold {{setting.settingName + ": "}} 
            span.ms-2 {{setting.settingValue}}
    hr
    .exercise-teacher
        QuillEditor(
            :options="options"
            @ready="onEditorTeacherReady($event)")
    hr
    .exercise-response(v-if="newAttempt")
        h2.mb-2 Ваш ответ
        QuillEditor(
            v-model:content="dataProperty"
            @ready="onEditorResponseReady($event)")
        .exercise-response.buttons.mt-2.text-end
            p.m-0.text-danger(v-if="access") Ответ не содержит текст, вы уверены?
            button.btn.btn-secondary(@click="inputCheck" v-if="send == true") Отправить

    .exercise-footer.d-flex.justify-content-between
        router-link(:to="`/course/` + courseObject.id" class="btn btn-secondary") К заданиями

</template>

<script>
import exerciseBlock from '../blocks/ExerciseBlock'
import {mapActions, mapGetters, mapMutations} from "vuex"
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
    components: {
        exerciseBlock,
        QuillEditor
    },
    data() {
        return {
            quillEditorInstance: null,
            quillEditorResponseInstance: null,
            dataProperty: "",
            retryError: "",
            send: false,
            access: false,
            newAttempt: true,
            dataExercise: [],
            exerciseValues: ["date","dateEnd", "currentGrades", "currentAttempt", "maxAttempt", "exerciseStatusList"],
            exerciseSetting: [
                {
                    settingName: "Отправлено",
                    settingValue: ""
                },
                {
                    settingName: "Срок",
                    settingValue: ""
                },
                {
                    settingName: "Оценка",
                    settingValue: ""
                },
                {
                    settingName: "Попытка",
                    settingValue: "0"
                },
                {
                    settingName: "Всего попыток",
                    settingValue: "0"
                },
                {
                    settingName: "Статус",
                    settingValue: "0"
                },
            ],
            options: {
                readOnly: true,
                //placeholder: "Задание пустое",
                modules: {
                    toolbar: false,
                },
            }
        }
    },
    computed: {
        ...mapGetters(["currentDate", "courseObject", "user", "studentExercise", "activeTabId", "exerciseObject", "exerciseStatusList"])
    },
    methods: {
        ...mapActions(["fetchCourseExerciseList", "fetchActiveTab", "fetchCourseList"]),
        ...mapMutations(["getCourseObject", "getCourseExerciseObject", "getStudentExercise", "setExerciseStatus", "setStudentExerciseResponse", "incremetCurrentAttempts", "getExerciseStatusOptions"]),
        getDate(strDate) {
          let date = String(strDate).split("-")
          return date[2] + "." + date[1] + "." + date[0] 
        },
        onEditorTeacherReady(QuillEditor) {
            this.quillEditorInstance = QuillEditor
        },
        inputCheck() {

            if (this.dataProperty && Object.keys(this.dataProperty).length !== 0 || this.access === true) {
                this.access = false
                this.send = false
                this.retryError = ""
                this.setStudentExerciseResponse({studentId: this.user.id, exerciseId: this.$route.params.exercise_id, exerciseResponse: this.dataProperty})
            } else {
                this.access = true
            }

        },
        onEditorResponseReady(QuillEditor) {
            this.quillEditorResponseInstance = QuillEditor
        },
        resetField() {
            this.quillEditorResponseInstance.setText("", 'user')
            this.retryError = ""
        },
        retry() {
            if (Object.keys(this.dataExercise.exerciseResponse).length != 0) {
                this.resetField()
                this.send = true
                this.incremetCurrentAttempts({courseId: this.$route.params.course_id, exerciseId: this.$route.params.exercise_id})
            } else {
                this.retryError = "Еще не было отправлено ни одного ответа"
            }

        },
        getExerciseInfo() {
            this.exerciseSetting.map( (e, i) => {
                switch(i) {
                    case 0:
                    case 1: 
                        this.exerciseSetting[i].settingValue = this.getDate(this.dataExercise[this.exerciseValues[i]])
                        break
                    case 2:
                        let grades = this.dataExercise[this.exerciseValues[i]]
                        this.exerciseSetting[i].settingValue = grades === 0 ? "Не поставлена" : grades
                        break
                    case this.exerciseSetting.length - 1:
                        this.exerciseSetting[i].settingValue = this.exerciseStatusList[this.dataExercise.statusExercise]?.text
                        break
                    default:
                        this.exerciseSetting[i].settingValue = this.dataExercise[this.exerciseValues[i]]
                        break
                }
            })
        }
    },
    async mounted() {
        await this.fetchActiveTab()
        await this.fetchCourseList()

        if (this.user.role == "teacher") {
            await this.getCourseObject(this.$route.params.course_id)
            this.getCourseExerciseObject({courseId: this.$route.params.course_id, exerciseId: this.$route.params.exercise_id})
            this.dataExercise = this.courseObject
            console.log(this.courseObject);
        } else if (this.user.role == "student") {
            this.getStudentExercise({student_id: this.user.id, tab_id: this.activeTabId, exercise_id: this.$route.params.exercise_id})
            this.dataExercise = this.studentExercise
        }

        this.getExerciseStatusOptions()

        if (Object.keys(this.dataExercise.exerciseResponse).length != 0) {
            this.quillEditorResponseInstance.setContents(this.dataExercise.exerciseResponse, "api")
        } else {
            this.send = true
        }
        this.newAttempt = true
        this.quillEditorInstance.setContents(this.dataExercise.exerciseContent, "api")
    },
    watch: {
        exerciseObject: {
            handler(e) {
                this.getExerciseInfo()
            },
            deep: true
        },
        studentExercise: {
            handler(e) {
                this.getExerciseInfo()
            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>