<template lang="pug">
.card.mb-2
    .card-header.d-flex.justify-content-between
        .lms-cards-title
            h1.fs-4.text-dark.m-0 Сводка по классам
        .lms-cards-setting(v-if="user.role != 'student'")
            button.btn.btn-sm.btn-secondary(data-bs-toggle="modal" data-bs-target="#newClass" @click="resetCourseObject") Новый класс
    .card-body
        .lms-cards.row.h-100
            .lms-cards-col.col-12.col-sm-6.col-lg-4.col-xll-3.mb-3.h-100(v-for="(col, index) in course" :key="index")
                router-link(:to="`course/` + String(col.id)" @click="getCourseObject(col.id)" class="lms-card card h-100 text-decoration-none") 
                    img.card-img-top(src="https://placehold.co/100x50/png")
                    .card-body
                        .card-text.text-truncate.fw-bold.text-center {{ col.categoryName }}
                        .card-title.text-wrap.h-100 {{ col.courseName }}
                    .card-footer
                        .progress
                            .progress-bar(role="progressbar" 
                                            :style="{width: col.progress + '%'}"
                                            :aria-valuenow="col.progress" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100") {{ col.progress + '%' }}
                .setting.mt-2.row.g-2(v-if="user.role != 'student'")
                    .col-12.col-sm-6.mb-2
                        button.btn.btn-primary.w-100(data-bs-toggle="modal" data-bs-target="#newClass" @click="getCourseObject(col.id)") Изменить
                    .col-12.col-sm-6.mb-2
                        button.btn.btn-primary.w-100(@click="deleteCourse(col.id)") Удалить
newClass()
</template>

<script>
import newClass from './../toast/NewClass'
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    components: {
        newClass
    },
    data() {
        return {
            course: []
        }
    },
    computed: {
        ...mapGetters(["courseList", "user", "student"])
    },
    methods: {
        ...mapActions(["fetchCourseList", "fetchUser", "fetchStudentList"]),
        ...mapMutations(["getCourseObject", "resetCourseObject", 'deleteCourse']),

        showToas(id) {
            let toast = document.getElementById(id)
            toast = new bootstrap.Toast(toast)
            toast.show()
        },
        showCards() {
            if (this.user.role === "teacher") {
                this.course = this.courseList
            } else if (this.user.role === "student") {
                let studentId = this.student.findIndex( (e) => e.id === this.user.id)
                this.course = [this.student[studentId].courseList]
            }

            console.log(this.course);

        }
    },
    async mounted() {
        await this.fetchUser()
        await this.fetchStudentList()
        await this.fetchCourseList()
        this.showCards()
    },
    watch: {
        user: {
            handler() {
                this.showCards()
            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>
</style>