<template lang="pug">
.academic-performance-col.card.text-dark.bg-light.w-100.mb-3
    .card-header.text-center.text-lg-start Курс {{Math.round(semester / 2)}}
    .card-body
        .col.row.line-block(v-for="(subject, index) in subjects" :key="index")
            .col-12.col-lg-7.mb-3.fs-6
                //- v-inputLine(
                //-         v-bind:id = "`academic-Performance-subject-${semester}`"
                //-         v-bind:value = "subject.name"
                //-         v-bind:label = "`Дисциплина, модуль или МДК практика`"
                //-     )
                v-inputDatalist()
            .col-6.col-lg-3.mb-3
                v-inputNumber(
                    v-bind:id = "`academic-Performance-studyLoad-${index}`"
                    v-bind:value = "subject.studyLoad"
                    v-bind:label = "`Учебная нагрузка (час)`"
                    )
            .col-6.col-lg-2.mb-3
                v-inputSelect(
                    v-bind:rating="subject.rating"
                )
</template>

<script>
export default {
    props: {
        subjects : {
            type: Array,
            default: []
        },
        semester : {
            type: Number,
            default: 1
        }
    }
}
</script>

<style scoped>

</style>