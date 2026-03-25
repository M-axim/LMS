<template lang="pug">
.students__list.row
    .students-col.col-12.col-lg-6(v-for="(studentItem, index) in studentItems" :key="index")
        .card.text-dark.bg-light.w-100.mb-3
            .card-header.text-center.text-lg-start.fs-4 Студент № {{index + 1}} / {{studentItem.studentFullname}}
            .card-body
                .col.row.line-block
                    .col-12.col-md-4.col-lg-6.mb-3 
                        v-inputLine(
                                v-bind:value = "studentItem.curator"
                                v-bind:label = "`ФИО Куратора`"
                            )
                    .col-12.col-md-4.col-lg-6.mb-3 
                        v-inputLine(
                                v-bind:value = "studentItem.birthday"
                                v-bind:type = "`date`"
                                v-bind:label = "`Дата рождения`"
                            )
                    .col-12.col-md-4.col-lg-6.mb-3
                        v-inputLine(
                                v-bind:value = "studentItem.groupName"
                                v-bind:label = "`Группа`"
                            )
                    .col-12.col-md-6.col-lg-6.mb-3
                        v-inputLine(
                                v-bind:value = "studentItem.status"
                                v-bind:label = "`Статус`"
                            )
                    .col-12.mb-3.d-flex.align-items-end.justify-content-end
                        <router-link :to='`/student/${index}`' class="btn btn-primary fs-5 mb-2 w-100">Подробнее</router-link>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
    computed: {
        ...mapGetters(["studentItems"])
    },
    methods: {
        ...mapActions(["fetchStudentItems"]),
    },
    async mounted() {
        this.fetchStudentItems()
    },

}
</script>

<style scoped>

</style>