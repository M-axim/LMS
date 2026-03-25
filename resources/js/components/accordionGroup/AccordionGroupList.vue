<template lang="pug">
.group-list.row
    .group-list-col.col-12.col-lg-6(v-for="(accordionGroupItem, index) in accordionGroupList" :key="index")
        .card.text-dark.bg-light.mb-3
            .card-header.text-center.text-lg-start.d-flex.justify-content-between {{ this.width >= 577 ? getHeader(accordionGroupItem.groupName, accordionGroupItem.curatorFullName) : accordionGroupItem.groupName}}
                button.btn-close(type="button" @click="deleteItem" aria-label="Close" :delete-id="index")
            .card-body
                .col.row.line-block.col-12
                    .col-12.col-md-6.col-lg-4.mb-3
                        v-inputLine(
                            v-bind:disabled = "true"
                            v-bind:value = "accordionGroupItem.studentCount"
                            v-bind:label = "`Кол-во студентов`"
                        )
                    .col-12.col-md-6.col-lg-4.mb-3
                        v-inputLine(
                            v-bind:value = "accordionGroupItem.enrollmentDate"
                            v-bind:type = "`date`"
                            v-bind:label = "`Дата зачисления`"
                            v-bind:disabled = "true"
                        )
                    .col-12.col-md-6.col-lg-4.mb-3(v-if="this.width < 577")
                        v-inputLine(
                            v-bind:value = "accordionGroupItem.curatorFullName"
                            v-bind:label = "`ФИО куратора`"
                            v-bind:disabled = "true"
                        )
                    .col-12.col-lg-4.mb-3.d-flex.align-items-end.justify-content-end
                        <router-link :to='`/groups/${index}`' class="btn btn-primary fs-5 mb-2 w-100">Подробнее</router-link>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex"

    export default {
        props: {
            subjectCode : {
                type: Number,
                default: null
            }
        },
        data() {
            return {
                width: 0
            }
        },
        computed: {
            ...mapGetters(["accordionGroupList"])
        },
        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize()
        },
        methods: {
            ...mapActions(["fetchAccordionGroupList"]),

            getHeader (_groupName, _curatorFullName) {
                let groupName = _groupName.trim() !== "" ? _groupName : "11-?"
                let curatorFullName = _curatorFullName.trim() !== "" ? _curatorFullName : "Куратор не поставлен"

                return groupName + " / " + curatorFullName

            },

            handleResize() {
                this.width = window.innerWidth;
            }

        },
        async mounted() {
            this.fetchAccordionGroupList(this.subjectCode)
        },
    }
</script>

<style scoped>

</style>