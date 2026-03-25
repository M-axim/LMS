<template lang="pug">
.transfer-course-col.card.text-dark.bg-light.w-100.mb-3(v-for="(transferCourseItem, index) in transferCourseList" :key="index")
    .card-header.text-center.text-lg-start {{transferCourseItem.title}}
    .card-body
        .col.row.line-block
            .col-12.col-lg-6.mb-3
                v-inputLine(
                    v-bind:id = "`transfer-course-text-${index}`"
                    v-bind:value = "transferCourseItem.DecreeValue"
                    )
            .col-12.col-lg-6.mb-3
                v-inputLine(
                    v-bind:id = "`transfer-course-date-${index}`"
                    v-bind:value = "transferCourseItem.DecreeDate"
                    v-bind:type = "`date`"
                    v-bind:label = "`Дата`"
                    )
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
    computed: {
        ...mapGetters(["transferCourseList"])
    },
    methods: {
        ...mapActions(["fetchTransferCourseList"])
    },
    async mounted() {
        this.fetchTransferCourseList()
    },
}
</script>

<style lang="scss" scoped>

</style>