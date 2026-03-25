<template lang="pug">
.transfer-group-col.card.text-dark.bg-light.w-100.mb-3(v-for="(transferGroupItem, index) in transferGroupList")
    .card-header.text-center.text-lg-start.d-flex.justify-content-between Приказ на перевод из группы {{ ++index }}
        button.btn-close(type="button" @click="deleteItem" aria-label="Close" :id="index" v-if="index > 1")
    .card-body
        .col.row.line-block
            .col-12.col-lg-6.mb-3
                v-inputLine(
                    v-bind:id = "`transfer-group-text-${index}`"
                    v-bind:value = "transferGroupItem.DecreeValue"
                    )
            .col-12.col-lg-6.mb-3
                v-inputLine(
                    v-bind:id = "`transfer-group-date-${index}`"
                    v-bind:value = "transferGroupItem.DecreeDate"
                    v-bind:type = "`date`"
                    v-bind:label = "`Дата`"
                    )
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
    computed: {
        ...mapGetters(["transferGroupList"])
    },
    methods: {
        ...mapActions(["fetchTransferGroupList"]),

        deleteItem: function(e) {
            console.log(e.target.id)
        }

    },
    async mounted() {
        this.fetchTransferGroupList()
    },
}
</script>

<style lang="scss" scoped>

</style>