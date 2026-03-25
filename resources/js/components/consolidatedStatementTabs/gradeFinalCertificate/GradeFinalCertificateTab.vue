<template lang="pug">
#GradeFinalCertificate.tab-pane.fade(role="tabpanel" aria-labelledby="enrolled-tab")
    form(@submit="checkForm")
        gradeFinalCertificateCol
        .mt-3.w-100.text-center.text-lg-start
            button.btn.btn-primary.fs-4.me-3.mb-2(type="submit") Обновить данные
</template>

<script>
import gradeFinalCertificateCol from './GradeFinalCertificateCol';

    export default {
        components: {
            gradeFinalCertificateCol
        }
    }
</script>

<style scoped>

</style>