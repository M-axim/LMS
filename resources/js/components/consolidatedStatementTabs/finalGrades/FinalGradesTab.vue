<template lang="pug">
#finalGrades.tab-pane.fade.show.active(role="tabpanel" aria-labelledby="enrolled-tab")
    form(@submit="checkForm")
        finalGradesColVue
        .mt-3.w-100.text-center.text-lg-start
            button.btn.btn-primary.fs-4.me-3.mb-2(type="submit") Обновить данные
</template>

<script>
import finalGradesColVue from './FinalGradesCol'

    export default {
        components: {
            finalGradesColVue
        }
    }
</script>

<style scoped>

</style>