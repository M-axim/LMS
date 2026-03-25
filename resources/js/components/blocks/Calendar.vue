<template lang="pug">
.calendar
    .calendar-header.d-flex.justify-content-between.align-items-center
        .calendar-left
            i.bi.bi-chevron-double-left.fs-6.cursor-pointer(@click="changeDay('decrease')")
        .calendar-title
            h2.fs-6 {{ yearMonths[currentMonth] + " " + currentYear}}
        .calendar-right
            i.bi.bi-chevron-double-right.fs-6.cursor-pointer(@click="changeDay('increase')")
    .calendar-body.text-center.position-relative.table-responsive
        table.table.table-bordered.table-sm
            thead.table-light
                tr
                    th.fs-6(v-for="(elem, index) in weekdays" :key="index") {{ elem }}
            tbody
                tr(v-for="(list, listIndex) in countWeek" :key="listIndex")
                    td.cursor-pointer.fs-6(
                        
                        v-for="(elem, index) in monthDays.slice(listIndex * 7, (listIndex + 1) * 7)"
                        :key="index") {{ elem.value !== "" ? elem.value : ""}}
                        //- :class="{'bg-secondary pe-none' : ordersDay.findIndex( (a) => a == (currentYear + '.' + currentMonth + '.' + elem.value)) !== -1 || elem.value === '', 'border-2 border-warning': selectDay.findIndex( (a) => a == (currentYear + '.' + currentMonth + '.' + elem.value)) !== -1}") 
                        //- @click="setSelectDay(currentYear + '.' + currentMonth + '.' + elem.value)"
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    computed: {
        ...mapGetters(["currentMonth", "yearMonths", "currentYear", "weekdays", "countWeek", "monthDays"])
    },
    methods: {
        ...mapMutations(["changeDay", "getCalendarDays", "changeDay"]),
    },
    async mounted() {
        this.getCalendarDays()
        //await this.fetchOrderList({})
        //this.orderList.map( (e) => this.ordersDay.push(...e.orderTime))
    }
}
</script>

<style lang="scss" scoped>
.list-group-item {
    width: 150px;
}
.static-tr {
    min-width: 150px;
}
.table-full {
    height: calc(100vh - 150px);
}
.cursor-pointer:hover {
    cursor: pointer;
}
</style>