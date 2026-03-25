<template lang="pug">
#enrolled.tab-pane.fade.show.active(role="tabpanel" aria-labelledby="enrolled-tab")
    form(@submit="checkForm")
        EnrolledCols
        .mt-3.w-100.text-center.text-lg-start
            button.btn.btn-primary.fs-4.me-3.mb-2(type="button" @click="newItem") Повторное зачисление
            button.btn.btn-primary.fs-4.me-3.mb-2(type="submit") Обновить данные
</template>

<script>
import EnrolledCols from './EnrolledCol'
import {mapMutations} from "vuex"

export default {
    components: {
        EnrolledCols
    },
    methods: {
        ...mapMutations(["newEnrolledItem"]),

        checkForm: function (e) {
            e.preventDefault();
            console.log("enrolled");
        },

        newItem: function (e) {this.newEnrolledItem()}
    },
}
</script>

<style lang="scss" scoped>

</style>