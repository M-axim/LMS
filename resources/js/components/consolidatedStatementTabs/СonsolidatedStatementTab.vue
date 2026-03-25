<template lang="pug">
#consolidatedStatement.tab-pane.fade(role="tabpanel" aria-labelledby="consolidatedStatement-tab")
    tabsItems(v-bind:TabsItems="tabList")
    #consolidatedStatementTabContent.tab-content.fs-4.mt-3
        finalGradesTab
        gradeCourseSubjectTab
        gradeFinalCertificateTab
</template>

<script>
import tabsItems from "../TabsItems"
import finalGradesTab from './finalGrades/FinalGradesTab'
import gradeCourseSubjectTab from './GradeCourseSubject/GradeCourseSubjectTab'
import gradeFinalCertificateTab from "./gradeFinalCertificate/GradeFinalCertificateTab"

import {mapActions, mapGetters} from "vuex"

export default {
    components: {
        tabsItems,
        finalGradesTab,
        gradeCourseSubjectTab,
        gradeFinalCertificateTab
    },
    computed: {
        ...mapGetters(["tabList"])
    },
    methods: {
        ...mapActions(["fetchTabList"]),
    },
    async mounted() {
        this.fetchTabList()
    },
}
</script>

<style scoped>

</style>