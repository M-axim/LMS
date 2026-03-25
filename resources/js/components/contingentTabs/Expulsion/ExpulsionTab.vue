<template lang="pug">
#expulsion.tab-pane.fade(role="tabpanel" aria-labelledby="expulsion-tab")
    form(@submit="checkForm")
        ExpulsionCols
        .mt-3.w-100.text-center.text-lg-start
            button.btn.btn-primary.fs-4.me-3.mb-2(type="submit" @click="newItem") Добавить приказ на отчисление
            button.btn.btn-primary.fs-4.me-3.mb-2(type="submit") Обновить данные
</template>

<script>
import ExpulsionCols from './ExpulsionCol'
import {mapMutations} from "vuex"

export default {
        components: {
            ExpulsionCols
        },

        methods: {
            ...mapMutations(["newExpulsionItem"]),

            newItem: function (e) {
                console.log(e);
                this.newExpulsionItem()
            },

            checkForm: function (e) {
                e.preventDefault();
                console.log("expulsion")
            },
        },
    }
</script>

<style scoped>

</style>