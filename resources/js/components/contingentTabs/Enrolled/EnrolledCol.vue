<template lang="pug">
.enrolled-col.card.text-dark.bg-light.w-100.mb-3(v-for="(enrolledItem, index) in enrolledList" :key="index")
    .card-header.text-center.text-lg-start.d-flex.justify-content-between Приказ на зачисление {{ ++index }}
        button.btn-close(type="button" @click="deleteItem" aria-label="Close" :id="index" v-if="index > 1")
    .card-body
        .col.row.enrolled-top
            .col-12.col-lg-6.mb-3
                v-inputLine(
                    v-bind:id = "`enrolled-text-${index}`"
                    v-bind:value = "enrolledItem.decreeValue"
                    )
            .col-12.col-lg-6.mb-3
                v-inputLine(
                    v-bind:id = "`enrolled-date-${index}`"
                    v-bind:value = "enrolledItem.decreeDate"
                    v-bind:type = "`date`"
                    v-bind:label = "`Дата`"
                    )
        .col-12.mb-3.enrolled-bottom
            .row
                .col
                    v-inputNumber(
                        v-bind:id = "`enrolled-course-${index}`"
                        v-bind:value = "enrolledItem.courseValue"
                        v-bind:label = "`Курс`"
                        )
                .col
                    v-inputLine(
                        v-bind:id = "`enrolled-group-${index}`"
                        v-bind:value = "enrolledItem.groupValue"
                        v-bind:label = "`Группа`"
                        )
                .col
                    v-inputLine(
                        v-bind:id = "`enroll-date-${index}`"
                        v-bind:value = "enrolledItem.enrollmentDate"
                        v-bind:type = "`date`"
                        v-bind:label = "`Дата зачисления`"
                        )
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
    computed: {
        ...mapGetters(["enrolledList"])
    },
    methods: {
        ...mapActions(["fetchEnrolledList"]),

        deleteItem: function(e) {
            console.log(e.target.id)
        }
        
    },
    async mounted() {
        this.fetchEnrolledList()
    },
}
</script>

<style lang="scss" scoped>

</style>