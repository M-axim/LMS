<template lang="pug">
.d-flex.flex-column.justify-content-center(:style="{'height': height + 'px'}")
    .rounded.d-flex.justify-content-center
        .col-md-4.col-sm-12.shadow-lg.p-5.bg-light
            .text-center
                h3.text-primary Вход
            .p-4
                form(action='')
                    .input-group.mb-3
                        p.m-0.text-danger.text-center.mb-2.w-100 {{ loginError}}
                        span.input-group-text.bg-primary
                            i.bi.bi-person-plus-fill.text-white
                        input.form-control(type='text' placeholder='Логин' v-model="login")
                    .input-group.mb-3
                        p.m-0.text-danger.text-center.mb-2.w-100 {{ passwordError}}
                        span.input-group-text.bg-primary
                            i.bi.bi-key-fill.text-white
                        input.form-control(type='password' placeholder='Пароль' v-model="password")
                    .d-grid.col-12.mx-auto
                        button.btn.btn-primary(type='button' @click="inputCheck")
                            span Войти
                        p.m-0.text-danger.text-center.mt-2 {{ formError}}

</template>

<script>
import {ref} from 'vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
    data() {
        return {
            height: ref(window.innerHeight),
            login: "",
            password: "",

            loginError: "",
            passwordError: "",
            formError: "",

            tmpUser: null
        }
    },
    computed: {
        ...mapGetters(["student", "teacher"])
    },
    methods: {
        ...mapActions(["fetchStudentList", "fetchTeacherList"]),
        ...mapMutations(["updateUser"]),

        getTmpUser(object) {
            this.tmpUser = {}
            this.tmpUser["id"] = object.id
            this.tmpUser["name"] = object.fullname
            this.tmpUser["role"] = object.role
        },
        inputCheck() {
            this.cleanError()

            if (this.login.length < 1)
                this.loginError = "Введите логин"
            else if (this.password.length < 1)
                this.passwordError = "Введите пароль"
            else {
                let studentId = this.student.findIndex( (e) => e.login == this.login && e.password == this.password)
                let teacherId = this.teacher.findIndex( (e) => e.login == this.login && e.password == this.password)

                if (studentId !== -1) {
                    this.getTmpUser(this.student[studentId])
                } else if (teacherId !== -1) {
                    this.getTmpUser(this.teacher[teacherId])
                } 

                console.log(this.tmpUser);

                if (this.tmpUser !== null) {
                    this.updateUser(this.tmpUser)
                    this.$router.push({ name: 'Home'});
                } else {
                    this.formError = "Логин или пароль введен не верно"
                }

            }
        },
        clean() {
            this.login = ""
            this.password = ""
        },
        cleanError() {
            this.loginError = ""
            this.passwordError = ""
            this.formError = ""
        }
    },
    async mounted() {
        await this.fetchStudentList()
        await this.fetchTeacherList()
    }
}
</script>

<style lang="scss" scoped>

</style>