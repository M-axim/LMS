<template lang="pug">
.teacher-main.row
    .teacher-view.col-12.col-sm-9
        .row
            .exercise-title.col
                h1 Учителя
            .exercise-button.col.m-auto.text-end.mb-2
                button.btn.btn-secondary(data-bs-toggle="modal" data-bs-target="#newTeacher") Добавить учителя
        .text-center.table-responsive(:style="{'height': height - 150 + 'px'}")
            table.table.table-responsive
                thead
                    tr
                        th Код учителя
                        th ФИО
                        th Номер телефона
                        th Логин
                        th Пароль
                        th Изменить
                        th Удалить
                tbody
                    tr(v-for="(elem, index) in teacher" :key="elem.id")
                        td {{ index + 1 }}
                        td {{ elem.fullname }}
                        td {{ elem.tel }}
                        td {{ elem.login }}
                        td {{ elem.password }}
                        td
                            button.btn.btn-sm.btn-warning(data-bs-toggle="modal" data-bs-target="#newTeacher" @click="getTeacherItem(elem.id)") Изменить
                        td
                            button.btn.btn-sm.btn-danger(@click="deleteTeacherItem(elem.id)") Удалить
    .teacher-info.col-12.col-sm-3
        lmsInfo()
newTeacher()
</template>

<script>
import lmsInfo from './lms/LmsInfo'
import newTeacher from "./toast/NewTeacher"
import {mapActions, mapMutations, mapGetters } from 'vuex'
import {ref} from "vue"

export default {
    components: {
        lmsInfo,
        newTeacher
    },
    data() {
        return {
            height: ref(window.innerHeight)
        }
    },
    computed: {
        ...mapGetters(["teacher"])
    },
    methods: {
        ...mapActions(["fetchTeacherList"]),
        ...mapMutations(["getTeacherItem", "deleteTeacherItem"]),
    },
    async mounted() {
        await this.fetchTeacherList()
    }
}
</script>

<style lang="scss" scoped>

</style>