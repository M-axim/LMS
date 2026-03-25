<template lang="pug">
#GradeCourseSubject.tab-pane.fade(role="tabpanel" aria-labelledby="enrolled-tab")
    form(@submit="checkForm")
        gradeCourseSubjectCol
        .mt-3.w-100.text-center.text-lg-start
            button.btn.btn-primary.fs-4.me-3.mb-2(type="submit") Обновить данные
</template>

<script>
import gradeCourseSubjectCol from './GradeCourseSubjectCol'

    export default {
        components: {
            gradeCourseSubjectCol
        }
    }
</script>

<style scoped>

</style>