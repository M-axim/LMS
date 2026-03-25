<template lang="pug">
#academicLeave.tab-pane.fade(role="tabpanel" aria-labelledby="academicLeave-tab")
    form(@submit="checkForm")
        academicLeaveCols
        .mt-3.w-100.text-center.text-lg-start
            button.btn.btn-primary.fs-4.me-3.mb-2(type="button" @click="newItem") Добавить академический отпуск
            button.btn.btn-primary.fs-4.me-3.mb-2(type="submit") Обновить данные
</template>

<script>
import academicLeaveCols from "./AcademicLeaveCol"
import {mapMutations} from "vuex"
    export default {
        components: {
            academicLeaveCols
        },
        methods: {
            ...mapMutations(["newAcademicLeaveItem"]),

            newItem: function (e) {
                console.log(e);
                this.newAcademicLeaveItem()
            },

            checkForm: function (e) {
                e.preventDefault();
                console.log("academicLeave")
            },
        },
    }
</script>

<style scoped>

</style>