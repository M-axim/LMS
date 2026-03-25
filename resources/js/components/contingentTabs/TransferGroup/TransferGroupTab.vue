<template lang="pug">
#transfer-group.tab-pane.fade(role="tabpanel" aria-labelledby="transfer-group-tab")
    form(@submit="checkForm")
        TransferGroupCols
        .mt-3.w-100.text-center.text-lg-start
            button.btn.btn-primary.fs-4.me-3.mb-2(type="button" @click="newTransferGroup") Добавить приказ на перевод
            button.btn.btn-primary.fs-4.me-3.mb-2(type="submit") Обновить данные
</template>

<script>
import TransferGroupCols from './TransferGroupCol.vue'
import {mapMutations} from "vuex"

export default {
    components: {
        TransferGroupCols
    },
    methods: {
        ...mapMutations(["newTransferGroupItem"]),

        newTransferGroup: function (e) {
            console.log(e);
            this.newTransferGroupItem()
        },

        checkForm: function (e) {
            e.preventDefault();
            console.log("transfer-group")
        },
    },
}
</script>

<style lang="sass" scoped>

</style>