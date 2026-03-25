<template lang="pug">
.HomeWork-main.row
    .homeWork-view.col-12.col-sm-9
        .row
            .exercise-title.col
                h1 Домашние задания
        .text-center.table-responsive(:style="{'height': height - 150 + 'px'}")
            table.caption-top.table.table-responsive(v-for="(elem, index) in homework" :key="elem.id")
                caption {{ elem.fullname }} / {{ getTab(elem.class)?.text }}
                thead
                    tr
                        th Код Д/З
                        th Задание
                        th Статус
                        th Оценка
                        th Настройки
                tbody
                    tr(v-for=" (item, itemId) in elem.exerciseList" :key="itemId")
                        td {{ itemId + 1 }}
                        td {{ item.exercise }}
                        td {{ exerciseStatusList[item.status]?.text }}
                        td {{ getGrade(item.current_grade)?.text }}
                        td
                            button.btn.btn-sm.btn-warning(v-if="item.status !== 0" data-bs-toggle="modal" data-bs-target="#studentExercise" @click="getStudentExercise({student_id: elem.student_id, tab_id: item.tab_id, exercise_id: item.exercise_id})") Оценить
                            button.btn.btn-sm.btn-warning(v-else disabled) Оценить
    .homeWork-info.col-12.col-sm-3
        lmsInfo()
studentExercise()
</template>

<script>
import lmsInfo from './lms/LmsInfo'
import studentExercise from "./toast/StudentExercise"
import {mapActions, mapMutations, mapGetters } from 'vuex'
import {ref} from "vue"

export default {
    components: {
        lmsInfo,
        studentExercise
    },
    data() {
        return {
            height: ref(window.innerHeight),
            homework: []
        }
    },
    computed: {
        ...mapGetters(["student", "courseList", "tabCourse", "gradeList", "user", "exerciseStatusList"])
    },
    methods: {
        ...mapActions(["fetchStudentList", "fetchCourseList"]),
        ...mapMutations(["getStudentItem", "getCourseTab", "getGradeOptions", "getStudentExercise", "deleteStudentItem", "getExerciseStatusOptions"]),
        getTab(elem) {
            return this.tabCourse.find( (e) => e.id == elem)
        },
        getGrade(grade) {

            if (grade > 5) {
                return {text: Math.ceil(grade) + "%"}
            }
            return this.gradeList.find( (e) => e.id == grade)
        },
        initial() {
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
                        tmpExerciseList.exercise = courseExercise.exerciseName
                        tmpExerciseList.exercise_id = courseExercise.id
                        tmpExerciseList.current_grade = courseExercise.currentGrades
                        tmpExerciseList.status = courseExercise.statusExercise
                        tmpHomeWork.exerciseList.push(tmpExerciseList)
                    })

                })
                this.homework.push(tmpHomeWork)
            })
        }
    },
    async mounted() {
        await this.fetchCourseList()
        await this.fetchStudentList()
        this.getGradeOptions()
        this.getCourseTab()
        this.getExerciseStatusOptions()
    },
    watch: {
        courseList: {
            handler() {
                this.getCourseTab()
            },
            deep: true
        },
        student: {
            handler() {
                if(this.$route.name == "HomeWork") {
                    this.initial()
                }
            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>