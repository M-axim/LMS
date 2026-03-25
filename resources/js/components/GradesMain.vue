<template lang="pug">
.student-main.row
    .student-view.col-12.col-sm-9
        .row
            .exercise-title.col
                h1 Оценки
        .text-center.table-responsive(:style="{'height': height - 150 + 'px'}")
            table.table.table-responsive.caption-top(v-for="(elem, index) in gradesList.courseExerciseList" :key="index")
                caption {{ elem.displayMode == 1 ? elem.tabHeader : elem.tabHeader + " (упрощенный)" }}
                thead
                    tr
                        th Номер
                        th Предмет
                        th Оценка
                        th Задание
                tbody
                    tr(v-for="(item, itemIndex) in elem.courseExercises" :key="item.id")
                        td {{ itemIndex + 1 }}
                        td {{ item.exerciseName }}
                        td {{ item.currentGrades == 0 ? "Не указана" : Math.ceil(item.currentGrades) }}
                        td(v-if="elem.displayMode == 1")
                            router-link(:to="`course/` + gradesList.id + `/exercise/` + item.id" class="text-dark fw-bold fs-6") Посмотреть
                        td(v-else) Тест
    .student-info.col-12.col-sm-3
        lmsInfo()
</template>

<script>
import lmsInfo from './lms/LmsInfo'
import {mapActions, mapMutations, mapGetters } from 'vuex'
import {ref} from "vue"

export default {
    components: {
        lmsInfo,
    },
    data() {
        return {
            height: ref(window.innerHeight),
            gradesList: []
        }
    },
    computed: {
        ...mapGetters(["student", "tabCourse", "user"])
    },
    methods: {
        ...mapActions(["fetchStudentList", "fetchUser"]),
        ...mapMutations(["getStudentItem", "getCourseTab", "deleteStudentItem"]),
    },
    async mounted() {
        this.getCourseTab()
        await this.fetchStudentList()
        await this.fetchUser()
        this.gradesList = this.student.find( (e) => e.id == this.user.id)
        this.gradesList = this.gradesList.courseList
    }
}
</script>

<style lang="scss" scoped>

</style>