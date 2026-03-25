<template lang="pug">
#academicPerformance.tab-pane.fade(role="tabpanel" aria-labelledby="academicPerformance-tab")
    tabsItems(v-bind:TabsItems="academicPerformanceList")
    #academicPerformanceTabContent.tab-content.fs-4.mt-3
        academicPerformanceTab
</template>

<script>
import tabsItems from "../TabsItems"
import academicPerformanceTab from './AcademicPerformance/AcademicPerformanceTab'
import {mapActions, mapGetters} from "vuex"

export default {
    components: {
        tabsItems,
        academicPerformanceTab
    },
    computed: {
        ...mapGetters(["academicPerformanceList"])
    },
    methods: {
        ...mapActions(["fetchAcademicPerformanceList"]),
    },
    async mounted() {
        this.fetchAcademicPerformanceList()
    },
}
</script>

<style scoped>

</style>