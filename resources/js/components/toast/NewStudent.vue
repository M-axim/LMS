<template lang="pug">
#newStudent.modal.fade(tabindex='-1' data-bs-backdrop="static" aria-labelledby='newStudentLabel' aria-hidden='true')
    .modal-dialog.modal-dialog-centered
        .modal-content
            .modal-header
                h1#newStudentLabel.modal-fullname.fs-5(v-if="id === null") Новый учащийся
                h1#newStudentLabel.modal-fullname.fs-5(v-else) Изменить учащегося
            .modal-body
                .mb-2
                    v-inputLine(:label="`Введите ФИО`" v-model:value="fullname")
                    p.m-0.ms-2.text-danger {{ fullnameError }}
                .mb-2
                    v-inputNumber(:label="`Введите номер телефона`" v-model:value="tel")
                    p.m-0.ms-2.text-danger {{ telError }}
                .mb-2
                    v-inputSelect(:label="`Класс`" v-model:value="class" :rating="classId" :options="tabCourse")
                    p.m-0.ms-2.text-danger {{ classError }}
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
            class: null,
            classId: 0,
            
            fullnameError: "",
            telError: "",
            loginError: "",
            passwordError: "",
            classError: ""
        }
    },
    computed: {
        ...mapGetters(["courseObject", "courseList", "studentItem", "tabCourse"])
    },
    methods: {
        ...mapMutations(["newStudent", "getStudentObject", "getCourseTab", "updateStudentList"]),
        ...mapActions(["fetchCourseList"]),
        checkInput() {
            if (this.fullname.length < 1)
                this.fullnameError = "ФИО не введено"
            else if (this.tel.length < 1)
                this.telError = "Номер телефона не введен"
            else if (this.class === null || this.class == 0)
                this.telError = "Выберите класс"
            else if (this.login.length < 1)
                this.loginError = "Логин не введен"
            else if (this.password.length < 1)
                this.passwordError = "Пароль не введен"
            else {

                // console.log(this.class == this.studentItem.class ? this.studentItem.courseList : this.courseList.find( (e) => e.id == this.class));

                console.log(this.studentItem);

                let tmpStudent = {
                    id: this.id,
                    fullname: this.fullname,
                    tel: this.tel,
                    login: this.login,
                    class: this.class,
                    password: this.password,
                    role: "student",
                    courseList: this.class == this.studentItem?.class ? this.studentItem?.courseList : this.courseList.find( (e) => e.id == this.class)
                }
                this.id === null ? this.newStudent(tmpStudent) : this.updateStudentList(tmpStudent)
                this.cleanField()
            }
        },

        cleanField() {
            this.id = null
            this.fullname = ""
            this.tel = ""
            this.login = ""
            this.password = ""
            this.class = null
            this.classId = 0
        }
    },
    async mounted() {
        this.cleanField()
        await this.fetchCourseList()
        this.getCourseTab()
    },
    watch: {
        studentItem: {
            handler() {
                console.log(this.studentItem);
                if (this.studentItem) {
                    this.id = this.studentItem.id
                    this.fullname = this.studentItem.fullname
                    this.tel = this.studentItem.tel
                    this.login = this.studentItem.login
                    this.class = this.studentItem.class
                    this.classId = this.tabCourse.findIndex( (e) => e.id == this.studentItem.class)
                    this.password = this.studentItem.password
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