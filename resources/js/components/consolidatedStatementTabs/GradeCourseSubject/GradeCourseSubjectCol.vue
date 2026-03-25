<template lang="pug">
.GradeCourseSubject-col.card.text-dark.bg-light.w-100.mb-3
    .card-header.text-center.text-lg-start Итоговый курсовой проект
    .card-body
        .col.row.line-block
            .col-12.col-lg-6.mb-3
                v-inputTextarea(
                    v-bind:id = "`grade-course-text`"
                    v-bind:value = "`Что-то похожее на АСУ для сервисного центра`"
                    v-bind:label = "`Курсовой проект на тему`"
                    )
            .col-12.col-lg-6.mb-3
                v-inputSelect(
                    v-bind:label = "`Оценка`"
                )
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>