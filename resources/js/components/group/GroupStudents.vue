<template lang="pug">
.group-students
    form
        .group-students-col.card.text-dark.bg-light.w-100.mb-3
            .card-header.text-center.text-lg-start.fs-4 Список студентов / Кол-во студентов: {{groupStudentsCount}}
            .card-body
                .col.row.line-block(v-for="(groupStudent, index) in groupStudents" :key="index")
                    .col-12.col-lg-5.mb-3.fs-6     
                        v-inputLine(
                                v-bind:value = "groupStudent.fullName"
                                v-bind:label = "`ФИО студента`"
                            )
                    .col-12.col-lg-5.mb-3
                        v-inputLine(
                                v-bind:value = "groupStudent.enrollmentDate"
                                v-bind:type = "`date`"
                                v-bind:label = "`Дата зачисления`"
                            )
                    .col-12.col-lg-2.mb-3.d-flex.align-items-end.justify-content-end
                        <router-link :to='`/students/${index}`' class="btn btn-primary fs-5 mb-2 w-100">Подробнее</router-link>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    computed: {
        ...mapGetters(["groupStudents", "groupStudentsCount"])
    },
    methods: {
        ...mapActions(["fetchGroupStudents"])
    },
    async mounted() {
        this.fetchGroupStudents()     
    },
}
</script>

<style scoped>

</style>