<template lang="pug">
.GradeFinalCertificate-col.card.text-dark.bg-light.w-100.mb-3
    .card-header.text-center.text-lg-start Результаты государственной итоговой атестации
    .card-body
        .col.row.line-block
            .col-12.col-lg-12.mb-3
                v-inputSelect(
                    v-bind:id = "`grade-dem-exam-rating`"
                    v-bind:label = "`Оценка за демонстрационный экзамен`"
                )
            .col-12.col-lg-6.mb-3
                v-inputTextarea(
                    v-bind:id = "`grade-final-certificate-text`"
                    v-bind:value = "`Автоматизация чего-то`"
                    v-bind:label = "`Выпускная квалификационная работа на тему`"
                    )
            .col-12.col-lg-6.mb-3
                v-inputSelect(
                    v-bind:id = "`grade-final-certificate-rating`"
                )
                
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>