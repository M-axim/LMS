<template lang="pug">
.academicLeave-col.card.text-dark.bg-light.w-100.mb-3(v-for="(academicLeaveItem, index) in academicLeaveList" :key="index")
    .card-header.text-center.text-lg-start.d-flex.justify-content-between Академический отпуск {{ ++index }}
        button.btn-close(type="button" @click="deleteItem" aria-label="Close" :id="index" v-if="index > 1")
    .card-body
        .col.row.line-block
                .col-12.col-lg-6.mb-3
                    v-inputLine(
                        v-bind:id = "`academicLeave-text-${index}`"
                        v-bind:value = "academicLeaveItem.DecreeValue"
                        )
                .col-12.col-lg-6.mb-3
                    v-inputLine(
                        v-bind:id = "`academicLeave-date-${index}`"
                        v-bind:value = "academicLeaveItem.DecreeDate"
                        v-bind:type = "`date`"
                        v-bind:label = "`Дата`"
                        )
                .col-12.col-lg-6.mb-3
                    v-inputLine(
                        v-bind:id = "`academicLeave-date-to-${index}`"
                        v-bind:value = "academicLeaveItem.DecreeDateTo"
                        v-bind:type = "`date`"
                        v-bind:label = "`Начиная с`"
                        )
                .col-12.col-lg-6.mb-3
                    v-inputLine(
                        v-bind:id = "`academicLeave-date-by-${index}`"
                        v-bind:value = "academicLeaveItem.DecreeDateBy"
                        v-bind:type = "`date`"
                        v-bind:label = "`Заканчивая по`"
                    )
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
    computed: {
        ...mapGetters(["academicLeaveList"])
    },
    methods: {
        ...mapActions(["fetchAcademicLeaveList"]),

        deleteItem: function(e) {
            console.log(e.target.id)
        }

    },
    async mounted() {
        this.fetchAcademicLeaveList()
    },
}
</script>

<style scoped>

</style>