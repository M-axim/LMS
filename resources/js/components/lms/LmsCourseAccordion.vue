<template lang="pug">
.accordion#accordionCourse.mb-4.overflow-hidden
    .accordion-item.mb-4(v-for="(accordion, accordionIndex) in dataExercise.courseExerciseList" :key="accordionIndex")
        h2.accordion-header(:id="`accordionHeader-${accordion.tabId}`")
            .admin-panel(v-if="user.role !== 'student'")
                button.btn.btn-sm.btn-secondary.m-2(data-bs-toggle="modal" data-bs-target="#newTab" @click="getTabObject({courseId: this.$route.params.course_id, tabId: accordion.tabId})") Изменить
                button.btn.btn-sm.btn-secondary.m-2(@click="deleteTab({courseId: this.$route.params.course_id, tabId: accordion.tabId})") Удалить
            button.accordion-button.bg-info.text-dark.fs-5.p-3(
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#accordionCollapse-${accordion.tabId}`"
                aria-expanded="true"
                :aria-controls="`accordionCollapse-${accordion.tabId}`") {{ accordion.displayMode == "1" ? accordion.tabHeader : accordion.tabHeader + " (упрощенный)"}}
        .accordion-collapse.collapse(
            :id="`accordionCollapse-${accordion.tabId}`"
            data-bs-parent="#accordionCourse"
            :aria-labelledby="`accordionHeader-${accordion.tabId}`")
            .accordion-body.m-0.p-0(v-if="accordion.displayMode == '1'")
                .accordion-header(v-for="(exercise, exerciseIndex) in accordion.courseExercises" :key="exerciseIndex")
                    .accordion-row.row.border-bottom.p-3
                        .col-8
                            .exercise-title
                                router-link(:to="courseId + `/exercise/` + exercise.id" class="text-dark fw-bold fs-6" @click="getCourseExerciseObject({courseId: this.$route.params.course_id, exerciseId: exercise.id}), setActiveTabId(accordion.tabId)") {{ exercise.exerciseName }}
                                span.badge.bg-warning.fw-bold.text-dark.fs-6.ms-2(v-if="exercise.type === 'test'") Тест
                            .exercise-info(v-if="!exerciseAdditionInfo(exercise.date, exercise.currentGrades, exercise.maxGrades)")
                                span {{ getExerciseDate(exercise.date) }} 
                                span {{ getExerciseGrades(exercise.currentGrades) }}
                        .col-4.align-self-center.text-end
                            button.btn.btn-sm.btn-primary.me-2(v-if="user.role !== 'student'" @click="deleteExercise({courseId: this.$route.params.course_id, tabId: accordion.tabId, exerciseId: exercise.id})") Удалить
                            button.btn.btn-sm.btn-primary(v-if="user.role !== 'student'" data-bs-toggle="modal" data-bs-target="#newExercise" @click="getCourseExerciseObject({courseId: this.$route.params.course_id, exerciseId: exercise.id})") Изменить
                            warningIcon(v-if="taskOverdue(exercise.date)")
            
            .accordion-body.m-0.p-3(v-else-if="accordion.displayMode == '2'")
                .simplified-row.row.row-cols-1.row-cols-md-5.g-3
                    .col(v-for="(exercise, exerciseIndex) in accordion.courseExercises" :key="exerciseIndex")
                        .card.h-100.text-center
                            .card-header {{ exercise.exerciseName }}

                            .card-body.card-hover.position-relative.overflow-hidden(
                                style="height: 210px;")
                                .card-unmask.w-100.h-100.bg-image.position-relative(style="z-index: 1; background: url(/img/books.png) center top no-repeat; background-size: contain")

                                .card-grades.position-absolute.top-50.start-50.translate-middle(style="z-index: 1")
                                    span.rounded-circle.bg-danger.fs-1.px-3.py-2 {{ Math.ceil(exercise.currentGrades) }}%

                                        
                            .card-footer.bg-danger
                                .simplified-notification.d-flex.justify-content-between
                                    p.text-white.m-0 Срок:
                                    p.text-white.m-0 {{ exercise.date }}
                                .simplified-notification.d-flex.justify-content-between
                                    p.text-white.m-0 Статус:
                                    p.text-white.m-0(v-if="exercise.currentGrades > 0") Решено
                                    p.text-white.m-0(v-else-if="taskOverdue(exercise.date)") Просрочено
                                    p.text-white.m-0(v-else) Активен
                                .card-settings
                                    button.btn.btn-sm.btn-secondary.w-100.mt-2(
                                        v-if="exercise.currentAttempt <= exercise.maxAttempt"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exerciseTestModal"
                                        @click="setActiveTabId(accordion.tabId), getTabObject({courseId: this.$route.params.course_id, tabId: accordion.tabId}), getCourseExerciseObject({courseId: this.$route.params.course_id, exerciseId: exercise.id})") Пройти

                                    button.btn.btn-sm.btn-warning.w-100.mt-2(v-if="user.role !== 'student'" @click="deleteExercise({courseId: this.$route.params.course_id, tabId: accordion.tabId, exerciseId: exercise.id})") Удалить
                                    button.btn.btn-sm.btn-danger.w-100.mt-2(v-if="user.role !== 'student'" data-bs-toggle="modal" data-bs-target="#newExercise" @click="getCourseExerciseObject({courseId: this.$route.params.course_id, exerciseId: exercise.id})") Изменить

exerciseTest()
</template>

<script>
import moment from 'moment';

import warningIcon from "../blocks/WarningIcon"
import exerciseTest from '../toast/ExerciseTest'
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    components: {
        warningIcon,
        exerciseTest
    },
    data() {
        return {
            courseId: this.$route.path,
            mask: false,
            dataExercise: []
        }
    },
    computed: {
        ...mapGetters(["currentDate", "courseList", "courseObject", "studentItem", "activeTabId", "user"])
    },
    methods: {
        ...mapActions(["fetchCourseExerciseList", "fetchCourseList", "fetchActiveTab", "fetchUser"]),
        ...mapMutations(["getCourseObject", "getTabObject", "deleteTab", "setActiveTabId", "getStudentItem", "deleteExercise", "getCourseExerciseObject"]),

        getExerciseDate         : (date) => date === null ? "" : date + " ",
        getExerciseMaxGrades    : (maxGrades) => maxGrades === null ? "" : "" + maxGrades + "",
        getExerciseGrades       : (grades) => grades === null ? "" : "/ Оценка: " + (grades === 0 ? "не указана" : grades),

        exerciseAdditionInfo(date, maxGrades, currentGrades) {
            return date === null && maxGrades === null && currentGrades === null
        },
        getDate(strDate) {
          let date = String(strDate).split("-")
          return date[2] + "." + date[1] + "." + date[0] 
        },

        taskOverdue(date) {
            if (moment(this.currentDate).diff(moment(date), 'days') >= 7)
                return true
            return false
        },
        getLinkTitle(exerciseType, text) {
            switch (exerciseType) {
                case "exercise":
                        return text
                    break;
                case "test":
                        return text + " Тест" 
                    break;
            }
        }
    },
    async mounted() {
        await this.fetchActiveTab()
        await this.fetchCourseList()
        await this.fetchUser()

        if (this.user.role == "teacher") {
            await this.getCourseObject(this.$route.params.course_id)
            this.dataExercise = this.courseObject
        } else if (this.user.role == "student") {
            this.getStudentItem(this.user.id)
            this.dataExercise = this.studentItem.courseList
        }

    },
}
</script>

<style lang="scss" scoped>
.card-hover:hover {
    .card-mask {
        opacity: 100% !important;
    }
}
</style>