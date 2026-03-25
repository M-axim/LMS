<template lang="pug">
#newTeacher.modal.fade(tabindex='-1' data-bs-backdrop="static" aria-labelledby='newTeacherLabel' aria-hidden='true')
    .modal-dialog.modal-dialog-centered
        .modal-content
            .modal-header
                h1#newTeacherLabel.modal-fullname.fs-5(v-if="id === null") Новый учитель
                h1#newTeacherLabel.modal-fullname.fs-5(v-else) Изменить учителя
            .modal-body
                .mb-2
                    v-inputLine(:label="`Введите ФИО`" v-model:value="fullname")
                    p.m-0.ms-2.text-danger {{ fullnameError }}
                .mb-2
                    v-inputNumber(:label="`Введите номер телефона`" v-model:value="tel")
                    p.m-0.ms-2.text-danger {{ telError }}
                .mb-2
                    v-inputLine(:label="`Введите логин`" v-model:value="login")
                    p.m-0.ms-2.text-danger {{ loginError }}
                .mb-2
                    v-inputLine(:label="`Введите пароль`" v-model:value="password")
                    p.m-0.ms-2.text-danger {{ passwordError }}
            .modal-footer
                button.btn.btn-primary(type="button" data-bs-dismiss="modal") Закрыть
                button.btn.btn-primary(type='button' @click="checkInput" v-if="id === null") Добавить
                button.btn.btn-primary(type='button' @click="checkInput" v-else) Изменить
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            id: null,
            fullname: "",
            tel: "",
            login: "",
            password: "",
            
            fullnameError: "",
            telError: "",
            loginError: "",
            passwordError: "",

        }
    },
    computed: {
        ...mapGetters(["courseObject", "teacherItem"])
    },
    methods: {
        ...mapMutations(["newTeacher", "getTeacherObject", "editTeacher"]),

        checkInput() {
            if (this.fullname.length < 1)
                this.fullnameError = "ФИО не введено"
            else if (this.tel.length < 1)
                this.telError = "Номер телефона не введен"
            else if (this.login.length < 1)
                this.loginError = "Логин не введен"
            else if (this.password.length < 1)
                this.passwordError = "Пароль не введен"
            else {
                let tmpTeacher = {
                    id: this.id,
                    fullname: this.fullname,
                    tel: this.tel,
                    login: this.login,
                    password: this.password
                }
                this.id === null ? this.newTeacher(tmpTeacher) : this.editTeacher(tmpTeacher)
                this.cleanField()
            }
        },

        cleanField() {
            this.id = null
            this.fullname = ""
            this.tel = ""
            this.login = ""
            this.password = ""
        }
    },
    async mounted() {
        this.cleanField()
    },
    watch: {
        teacherItem: {
            handler() {
                if (this.teacherItem) {
                    this.id = this.teacherItem.id
                    this.fullname = this.fullname
                    this.tel = this.tel
                    this.login = this.login
                    this.password = this.password
                } else 
                    this.cleanField()

            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>