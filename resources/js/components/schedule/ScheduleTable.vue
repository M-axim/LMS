<template lang="pug">
.schedule-table.calendar
    .calendar
        .calendar-header.d-flex.justify-content-between.align-items-center
            .calendar-left
                i.bi.bi-chevron-double-left.fs-3.cursor-pointer(@click="changeDay('decrease')")
            .calendar-title.d-flex.align-items-center
                h2 Группа:
                v-inputSelect(:options="groups")
            .calendar-right
                i.bi.bi-chevron-double-right.fs-3.cursor-pointer(@click="changeDay('increase')")
        .calendar-body.text-center.position-relative.table-responsive
            table.table.table-bordered.table-sm.table-full
                thead.table-light
                    tr
                        th Урок
                        th(v-for="(elem, index) in weekDates" :key="index") {{ weekDays[elem.day] }} {{ elem.date }}
                tbody
                    tr(v-for="(list, listIndex) in scheduleList" :key="listIndex")
                        th {{ list.numberClasses }}
                        td.static-tr(v-for="(elem, objectIndex) in weekDates")
                            span.d-block.fw-bold {{ getField(list.objectList, objectIndex, "objectName") }}
                            span.d-block {{ getField(list.objectList, objectIndex, "cabinetName") }}
                            span.d-block {{ getField(list.objectList, objectIndex, "teacherName") }}
</template>

<script>
import moment from 'moment';
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    data() {
        return {
            pageWidth: 0,
            groups: [
                {
                    id: 0,
                    text: "11-И"
                },
                {
                    id: 1,
                    text: "21-И"
                },
                {
                    id: 2,
                    text: "31-И"
                },
                {
                    id: 3,
                    text: "41-И"
                },
            ]
        }
    },
    created() {
        window.addEventListener("resize", this.GetWindowWidth)
    },
    computed: {
        ...mapGetters(["scheduleList", "weekDays", "showCountDay", "weekDates", "currentDate"])
    },
    methods: {
        ...mapActions(["fetchScheduleList"]),
        ...mapMutations(["updateScheduleList", "newShowCountDay", "getCalendarDays", "changeDay"]),

        getField(objectList, index, fieldName) {
            let field = ""
            objectList.map( (elem) => {
                if (elem.weekDate === this.weekDates[index].date)
                {
                    field = elem[fieldName]

                    if(fieldName === "cabinetName")
                        field = "№ каб. " + elem[fieldName]
                }
            })
            return field
        },
        GetWindowWidth(e) {
            this.pageWidth = e.currentTarget.innerWidth
            this.getCountTableColumnShow()
        },
        getCountTableColumnShow() {
            this.newShowCountDay(this.pageWidth <= 992 ? 1 : this.weekDays.length)
            this.getCalendarDays()
        }
    },
    async mounted() {
        this.fetchScheduleList()
        this.pageWidth = window.innerWidth
        this.getCountTableColumnShow()
        this.getCalendarDays()
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