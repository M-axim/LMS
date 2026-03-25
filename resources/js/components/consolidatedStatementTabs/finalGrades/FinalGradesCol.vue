<template lang="pug">
.final-grades-col.card.text-dark.bg-light.w-100.mb-3
    .card-header.text-center.text-lg-start Список финальных оценок
    .card-body
        .col.row.line-block(v-for="(subject, index) in subjectList" :key="index")
            .col-12.col-lg-7.mb-3.fs-6
                v-inputLine(
                        v-bind:id = "`final-grades-subject-${++index}`"
                        v-bind:value = "subject.name"
                        v-bind:label = "`Дисциплина, модуль или МДК практика`"
                    )
            .col-6.col-lg-3.mb-3
                v-inputNumber(
                    v-bind:id = "`final-grades-studyLoad-${index}`"
                    v-bind:value = "subject.studyLoad"
                    v-bind:label = "`Учебная нагрузка (час)`"
                    )
            .col-6.col-lg-2.mb-3
                v-inputSelect(
                    v-bind:rating="subject.rating"
                )
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
    computed: {
        ...mapGetters(["subjectList"])
    },
    methods: {
        ...mapActions(["fetchAllSubject"]),
    },
    async mounted() {
        this.fetchAllSubject()
    },

    }
</script>

<style scoped>

</style>