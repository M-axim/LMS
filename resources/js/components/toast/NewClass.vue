<template lang="pug">
#newClass.modal.fade(tabindex='-1' data-bs-backdrop="static" aria-labelledby='newClassLabel' aria-hidden='true')
    .modal-dialog.modal-dialog-centered
        .modal-content
            .modal-header
                h1#newClassLabel.modal-title.fs-5(v-if="id === null") Новый класс
                h1#newClassLabel.modal-title.fs-5(v-else) Изменить класс
            .modal-body
                .mb-2
                    v-inputLine(:label="`Введите заголовок`" v-model:value="title")
                    p.m-0.ms-2.text-danger {{ titleError }}
                .mb-2
                    v-inputLine(:label="`Введите описание`" v-model:value="description")
                    p.m-0.ms-2.text-danger {{ descriptionError }}
            .modal-footer
                button.btn.btn-primary(type="button" data-bs-dismiss="modal") Закрыть
                button.btn.btn-primary(type='button' @click="newClass" v-if="id === null") Добавить
                button.btn.btn-primary(type='button' @click="newClass" v-else) Изменить
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            id: null,
            title: "",
            titleError: "",
            description: "",
            descriptionError: "",
            progress: "",
            courseExerciseList: ""
        }
    },
    computed: {
        ...mapGetters(["courseObject"])
    },
    methods: {
        ...mapMutations(["newCourse", "getCourseObject", "editCourse"]),

        newClass() {
            console.log(this.courseExerciseList);
            if (this.title.length < 1)
                this.titleError = "Заголовок не введен"
            if (this.description.length < 1)
                this.descriptionError = "Описание не введено"

            if (this.title !== "" && this.description !== "") {
                let tmpCourse = {
                    id: this.id,
                    categoryName: this.title,
                    courseName: this.description,
                    progress: this.progress,
                    courseExerciseList: this.courseExerciseList
                }
                this.id === null ? this.newCourse(tmpCourse) : this.editCourse(tmpCourse)
                this.cleanField()
            }
        },

        cleanField() {
            this.id = null
            this.title = ""
            this.description = ""
            this.progress = 0
            this.courseExerciseList = []
        }
    },
    async mounted() {
        this.cleanField()
    },
    watch: {
        courseObject: {
            handler() {
                if (this.courseObject) {
                    this.id = this.courseObject.id
                    this.title = this.courseObject.categoryName
                    this.description = this.courseObject.courseName
                    this.progress = this.progress
                    this.courseExerciseList = this.courseObject.courseExerciseList
                } else 
                    this.cleanField()

            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>