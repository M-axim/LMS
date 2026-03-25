<template lang="pug">
.students__settings.row.my-3
    .col-3.d-flex.align-items-center
        nav
            ul.pagination.m-0
                li.page-item
                    a.page-link(href="#" data-page="prev" :class="{disabled: this.number <= 3}" @click="updatePageLinks(--this.number)") Назад
                li.page-item(v-for="pageLink in (this.pageLinks)")
                    a.page-link(href="#" :data-page="pageLink.value" @click="changePage") {{pageLink.value}}
                li.page-item
                    a.page-link(href="#" data-page="next" :class="{disabled: this.number >= this.pageCount}" @click="updatePageLinks(++this.number)") Вперед
    .col-7.d-flex.align-items-center
        form.row.w-100
            .input-group
                button.btn.btn-outline-secondary.dropdown-toggle(type="button" data-bs-toggle="dropdown" aria-expanded="false") Настройки
                ul.dropdown-menu
                    li
                        a.dropdown-item(href="#") ФИО студента
                    li
                        a.dropdown-item(href="#") Статус
                input.form-control(type="text" placeholder="Поиск по:" aria-label="Recipient's username" aria-describedby="button-search")
                button.btn.btn-outline-secondary(type="button" id="button-search") Поиск
    .col-2.d-flex.align-items-center.justify-content-end
        button.btn.btn-primary.mb-1(type="submit" @click="newAccordionItem") Новый студент
</template>

<script>
import { mapActions,  mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters(["pageCount"])
        },
        methods: {
            ...mapActions(["fetchStudentItems"]),

            changePage: function(e) {
                let attr = e.target.getAttribute("data-page")
                this.fetchStudentItems(--attr)
            },
            updatePageLinks: function (number) {
                console.log(this.pageItemCount)
                let arr = []
                for (let i = number - 2; i <= number; i++) {
                    arr.push({value: i})
                }
                this.pageLinks = arr
            }
        },
        data() {
            return {
                number: 3,
                pageLinks: [
                    {
                        value: 1
                    },
                    {
                        value: 2
                    },
                    {
                        value: 3
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>