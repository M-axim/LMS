<template lang="pug">
.expulsion-col.card.text-dark.bg-light.w-100.mb-3(v-for="(expulsionItem, index) in expulsionList" :key="index")
    .card-header.text-center.text-lg-start.d-flex.justify-content-between Приказ на отчисление {{ ++index }}
        button.btn-close(type="button" @click="deleteItem" aria-label="Close" :id="index" v-if="index > 1")
    .card-body
        .col.row.line-block
                .col-12.col-lg-6.mb-3
                    v-inputLine(
                        v-bind:id = "`expulsion-text-${index}`"
                        v-bind:value = "expulsionItem.DecreeValue"
                        )
                .col-12.col-lg-6.mb-3
                    v-inputLine(
                        v-bind:id = "`expulsion-date-${index}`"
                        v-bind:value = "expulsionItem.DecreeDate"
                        v-bind:type = "`date`"
                        v-bind:label = "`Дата`"
                        )
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
    computed: {
        ...mapGetters(["expulsionList"])
    },
    methods: {
        ...mapActions(["fetchExpulsionList"]),

        deleteItem: function(e) {
            console.log(e.target.id)
        }

    },
    async mounted() {
        this.fetchExpulsionList()
    },
}
</script>

<style scoped>

</style>