<template lang="pug">
.toastNewObject.position-fixed.top-50.start-50.translate-middle
    .toast#newObject.m-auto.bg-light(role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false")
        .toast-header.fs-4 Добавить предмет
            button.ms-auto.btn-close(type="button" data-bs-dismiss="toast" aria-label="Close")
        .toast-body
            .toast-inputs
                .toast-input.mb-1
                    v-inputDatalist(:placeholder="`Выберите предмет`" v-model:value="scheduleObjectName" :options="scheduleObject")
                .toast-input.mb-1
                    v-inputDatalist(:placeholder="`Выберите кабинет`" v-model:value="scheduleCabinetName" :options="scheduleCabinet")
                .toast-input.mb-1
                    v-inputDatalist(:placeholder="`Выберите преподавателя`" v-model:value="scheduleTeacherLastName" :options="scheduleTeacher")
            .toast-weekdays.row.px-3.mb-3
                button.btn.btn-outline.weekdays.col.btn-sm(v-for="(elem, index) in weekDays" :key="index" @click="selectWeekDays = index" :class="{'btn-dark': selectWeekDays === index}") {{ elem }}
            .toast-lessons
                label.form-label.col.m-0.input-group.w-100
                    v-inputSelect(:compare="true" v-model:value="numberLessonFirstInput")
                    span.input-group-text -
                    v-inputSelect(:compare="true" :rating="Number(numberLessonSecondInput)" v-model:value="numberLessonSecondInput")
        .toast-footer.fs-4.row.p-2
            .col
                button.btn.btn-outline-secondary.w-100(type="button" data-bs-dismiss="toast" @click="newObject()") Добавить
            .col(v-if="currentObject !== null")
                button.btn.btn-outline-secondary.w-100(type="button" data-bs-dismiss="toast") Удалить
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    data() {
        return {
            selectWeekDays: 0,
            scheduleObjectName: "0",
            scheduleCabinetName: "0",
            scheduleTeacherLastName: "0",
            numberLessonFirstInput: "1",
            numberLessonSecondInput: "1",
            currentObject: null
        }
    },
    computed: {
        ...mapGetters(["weekDays", "weekDates", "scheduleObject", "scheduleCabinet", "scheduleTeacher"])
    },
    methods: {
        ...mapActions(["fetchScheduleObjectList", "fetchScheduleCabinetList", "fetchScheduleTeacherList"]),
        ...mapMutations(["newSchedule"]),
        newObject() {
            let weekDate = this.weekDates.find( elem => elem.day === String(this.selectWeekDays))
            this.currentObject = {
                    numberClasses : this.numberLessonFirstInput,
                    objectList : [
                        {
                            id: 3,
                            weekDate: weekDate.date,
                            objectName: this.scheduleObjectName,
                            cabinetName: this.scheduleCabinetName,
                            teacherName: this.scheduleTeacherLastName
                        }
                    ]
                }
            this.newSchedule([this.currentObject, this.numberLessonSecondInput])
        },
        checkCorrectSelectLesson() {
            this.numberLessonSecondInput = this.numberLessonFirstInput
        }
    },
    watch: {
        numberLessonFirstInput: function(e) {
            this.checkCorrectSelectLesson()
        },
        numberLessonSecondInput: function(e) {
            if (Number(this.numberLessonSecondInput) < Number(this.numberLessonFirstInput))
                this.checkCorrectSelectLesson()
        }
    },
    async mounted() {
        this.fetchScheduleObjectList()
        this.fetchScheduleCabinetList()
        this.fetchScheduleTeacherList()
        console.log(this.scheduleTeacher);
    },
}
</script>

<style lang="scss" scoped>
</style>