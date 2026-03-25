<template lang="pug">
.col-12.my-3.d-flex.align-items-end.justify-content-end
    button.btn.btn-primary.fs-5.ms-3.mb-1(type="submit" @click="newAccordionItem") Новая специальность
    .btn-toolbar.ms-3.mb-1(role="toolbar" aria-label="Toolbar with button groups")
        .btn-group(role="group" aria-label="First group")
            button.btn.btn-primary.fs-5(type="button" title="Сортировка по умолчанию") Умол.
            button.btn.btn-primary.fs-5(type="button" title="Сортировка специальностей по алфавиту") А-Я
            button.btn.btn-primary.fs-5(type="button" title="Сортировка специальностей по алфавиту") Я-А
            button.btn.btn-primary.fs-5(type="button" title="Сортировка по отделению") Отдел
</template>

<script>
import {mapMutations} from "vuex"
    export default {
        methods: {
            ...mapMutations(["newAccordionItems"]),

            newAccordionItem: function (e) {
                console.log(e);
                this.newAccordionItems()
            },
        },
    }
</script>

<style scoped>

</style>