<template lang="pug">
#transfer-course.tab-pane.fade(role="tabpanel" aria-labelledby="transfer-course-tab")
    form
        transferCourseCols
        .mt-3.w-100.text-center.text-lg-start
            button.btn.btn-primary.fs-4.mb-2(type="submit") Обновить данные
</template>

<script>
import transferCourseCols from "./TransferCourseCol"
export default {
    components: {
        transferCourseCols
    },
}
</script>

<style lang="scss" scoped>

</style>