<template lang="pug">    

.accordion-item(v-for="(accordionItem, index) in accordionItems" :key="++index")
    h2.accordion-header(:id="`heading-${index}`")
        button.accordion-button.collapsed.fs-5(
            type='button',
            data-bs-toggle='collapse',
            :data-bs-target='`#collapse-${index}`',
            aria-expanded='true',
            :aria-controls="`collapse-${index}`") 
            | {{ getSubject(accordionItem.subjectCode, accordionItem.subjectName) }}
            | / Кол-во студентов: {{ accordionItem.studentCount }}
            | / Отдел {{ getDepartament(accordionItem.departmentNumber) }}
    .accordion-collapse.collapse(:aria-labelledby="`heading-${index}`", :id="`collapse-${index}`" data-bs-parent='#accordionGroup')
        .accordion-body
            accordionGroupList(v-bind:subjectCode = "index")
            .col-12.mb-3.d-flex.align-items-end.justify-content-end
                button.btn.btn-primary.ms-3.fs-5.mb-2(type="submit" :accordion-item-id="index" @click="newGroupItem") Добавить группу
                button.btn.btn-primary.ms-3.fs-5.mb-2(type="submit" :accordion-item-id="index") Удалить специальность
</template>

<script>
import accordionGroupList from './AccordionGroupList'
import {mapGetters, mapActions, mapMutations} from "vuex"

    export default {
        components: {
            accordionGroupList
        },
        computed: {
            ...mapGetters(["accordionItems"])
        },
        methods: {
            ...mapActions(["fetchAccordionItems"]),
            ...mapMutations(["newAccordionGroupList"]),

            getSubject (_subjectCode, _subjectName) {
                let subjectCode = _subjectCode.trim() !== "" ? _subjectCode : "00.00.00"
                let subjectName = _subjectName.trim() !== "" ? _subjectName : "Не указано"
                return subjectCode + " " + subjectName
            },

            getDepartament (departament) {
                return departament !== "0" ? "№" + departament : "не указан"
            },

            newGroupItem: function (e) {
                console.log(e);
                this.newAccordionGroupList()
            },
        },
        async mounted() {
            this.fetchAccordionItems()
        },
    }
</script>

<style scoped>

</style>