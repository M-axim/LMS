<template lang="pug">
.card.mb-2(v-if="courseId !== `Home`")
    .card-header
        .lms-cards-title
                h2.fs-4.m-0 Задачи
    .card-body
        .card-messages(v-if="user.role === 'teacher'")
            .card-message.message.mb-2(v-if="homework.length === 0")
                .message-title На данный момент Д/З нет
            .card-message.message.mb-2(v-for="(item, index) in homework" :key="index")
                .message-title.d-flex.flex-row.align-items-center {{ item.fullname }} / {{ getTab(item.class) }}
                    router-link(:to="`/homeWork`" class="btn btn-sm btn-secondary ms-auto") Перейти
                .message-footer.text-end 
                    

        .card-messages(v-else-if="user.role === 'student'")
            .card-message.message.mb-2(v-if="exercise.length === 0")
                .message-title На данный момент задач нет
            .card-message.message.mb-2(v-for="(item, index) in exercise" :key="index" v-else)
                .message-title
                    span.col.pd-0.fs-5(v-if="!Object.hasOwn(item.exerciseContent, 'ops')") {{ item.exerciseName}}
                    router-link(v-else :to="`/course/${studentInfo.courseList.id}/exercise/${item.id}`" class="col pd-0 fs-5") {{ item.exerciseName}}
                .message-body {{ Object.hasOwn(item.exerciseContent, "ops") ? "Необходимо выполнить упражнение" : "Необходимо решить тест"}}
                .message-footer.text-end До: {{ getDate(item.dateEnd) }}

</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    data() {
        return {
            courseId: this.$route.name,
            studentInfo: {},
            exercise: [],
            homework: []
        }
    },
    computed: {
        ...mapGetters(["student", "user", "tabCourse", "courseList"])
    },
    methods: {
        ...mapActions(["fetchStudentList", "fetchUser", "fetchCourseList"]),
        ...mapMutations(["getStudentItem", "getCourseTab", "updateClass", "deleteStudentItem"]),
        getDate(strDate) {
            let date = String(strDate).split("-")
            return date[2] + "." + date[1] + "." + date[0] 
        },
        getTab(elem) {
            return this.tabCourse.find( (e) => e.id == elem)?.text
        },
        getStudentHomework() {
            this.homework = []
            this.student.map( (stud) => {
                let tmpHomeWork = {}
                tmpHomeWork.student_id = stud.id
                tmpHomeWork.courseList_id = stud.courseList.id
                tmpHomeWork.fullname = stud.fullname
                tmpHomeWork.class = stud.class

                tmpHomeWork.exerciseList = []

                stud.courseList.courseExerciseList.map( (exercise) => {
                    let tmpExerciseList = {}
                    tmpExerciseList.tab_id = exercise.tabId

                    exercise.courseExercises.map( (courseExercise) => {
                        if (courseExercise.statusExercise == 1) {
                            tmpExerciseList.exercise = courseExercise.exerciseName
                            tmpExerciseList.exercise_id = courseExercise.id
                            tmpExerciseList.current_grade = courseExercise.currentGrades
                            tmpExerciseList.status = courseExercise.statusExercise
                            tmpHomeWork.exerciseList.push(tmpExerciseList)
                        }
                    })
                })
                if (tmpHomeWork.exerciseList.length != 0) {
                    this.homework.push(tmpHomeWork)
                }
            })

        },
        getTeacherExercise() {
            this.exercise = []
            this.studentInfo = []
            this.studentInfo = this.student.find( (e) => e.id == this.user.id)
            this.studentInfo.courseList.courseExerciseList.map( (item) => {
                item.courseExercises.map( (exer) => {
                    if (exer.currentGrades == 0) {
                        this.exercise.push(exer)
                    }
                })}
            )
        }
    },
    async mounted() {
        await this.fetchCourseList()
        await this.fetchStudentList()
        await this.fetchUser()
        this.getCourseTab()
        this.updateClass(this.courseList)

        if (this.user.role === 'teacher') {
            this.getStudentHomework()
        } else {
            this.getTeacherExercise()
        }

    },
    watch: {
        student: {
            handler() {
                if (this.user.role === 'teacher') {
                    this.getStudentHomework()
                } else {
                    this.getTeacherExercise()
                }
            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>