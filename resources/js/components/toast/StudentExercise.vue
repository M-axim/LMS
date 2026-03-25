<template lang="pug">
#studentExercise.modal.fade(tabindex='-1' data-bs-backdrop="static" aria-labelledby='studentExerciseLabel' aria-hidden='true')
    .modal-dialog.modal-xl.modal-dialog-centered.modal-dialog-scrollable
        .modal-content
            .modal-header
                h1#studentExerciseLabel.modal-title.fs-5 Ответ ученика
            .modal-body
                fieldset.exercise-response.mt-3.text-center.border.p-2.rounded
                    legend.float-none.w-auto.fs-6 Задание учителя
                    .mb-2.fs-4
                        QuillEditor(
                            :options="options"
                            @ready="onEditorTeacherReady($event)")
                fieldset.exercise-response.mt-3.text-center.border.p-2.rounded
                    legend.float-none.w-auto.fs-6 Ответ ученика
                    .mb-2.fs-4
                        QuillEditor(
                            :options="options"
                            @ready="onEditorStudentReady($event)")
            .modal-footer.align-items-end.d-flex.flex-column
                .modal-footer-content
                    .d-inline-block.me-2
                        v-inputSelect(:options="gradeList" :label="`Оценка`" v-model:value="currentGrades" :rating="currentGrades")
                    button.btn.btn-primary.ms-2(type="button" data-bs-dismiss="modal") Закрыть
                    button.btn.btn-primary.ms-2(type='button' @click="inputCheck") Выставить
                p.text-danger.m-0 {{ formError }}
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
export default {
    components: {
        QuillEditor
    },
    data() {
        return {
            id: null,
            currentGrades: 0,

            quillEditorTeacherInstance: null,
            quillEditorStudentInstance: null,

            formError: "",

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
        ...mapGetters(["courseObject", "studentExercise", "user", "gradeList"])
    },
    methods: {
        ...mapMutations(["newCourse", "getCourseObject", "setExerciseStatus", "getGradeOptions", "editCourse"]),

        inputCheck() {
            if (this.currentGrades == '0') {
                this.formError = "Оценка не выставлена"
            } else {
                this.setExerciseStatus({
                    student_id: this.studentExercise.studentId,
                    tab_id: this.studentExercise.tabId,
                    exercise_id: this.studentExercise.exerciseId,
                    currentGrades:this.currentGrades})
            }
        },

        onEditorTeacherReady(QuillEditor) {
            this.quillEditorTeacherInstance = QuillEditor
        },

        onEditorStudentReady(QuillEditor) {
            this.quillEditorStudentInstance = QuillEditor
        },

        cleanField() {
            this.id = null
            this.title = ""
            this.description = ""
            this.progress = 0
            this.courseExerciseList = []
        },

        setQuillEditor() {
            this.quillEditorStudentInstance.setContents(this.studentExercise.exerciseResponse, "api")
            this.quillEditorTeacherInstance.setContents(this.studentExercise.exerciseContent, "api")
        }

    },
    async mounted() {
        this.cleanField()
        this.getGradeOptions()
    },
    watch: {
        studentExercise: {
            handler() {
                if (this.studentExercise) {
                    this.getGradeOptions()
                    this.currentGrades = this.studentExercise.currentGrades
                    console.log(this.gradeList);
                    this.setQuillEditor()
                }

            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>
</style>