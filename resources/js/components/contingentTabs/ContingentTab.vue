<template lang="pug">
#contingent.tab-pane.fade.show.active(role="tabpanel" aria-labelledby="contingent-tab")
    tabsItems(v-bind:TabsItems="tabList")
    #contingentTabContent.tab-content.fs-4.mt-3
        enrolledTab
        transferCourseTab
        transferGroupTab
        expulsion
        academicLeave
</template>

<script>
import tabsItems from "../TabsItems"
import enrolledTab from "./Enrolled/Enrolled"
import transferCourseTab from "./TransferCourse/TransferCourseTab"
import transferGroupTab from "./TransferGroup/TransferGroupTab"
import expulsion from "./Expulsion/ExpulsionTab"
import academicLeave from "./AcademicLeave/AcademicLeaveTab"
export default
{
    components: {
        tabsItems,
        enrolledTab,
        transferCourseTab,
        transferGroupTab,
        expulsion,
        academicLeave
    },
    data() {
        return {
            tabList: 
            [
                {
                    tabId: "enrolled",
                    selected: true,
                    text: "Приказы на зачисление"
                },
                {
                    tabId: "transfer-course",
                    selected: false,
                    text: "Приказы на переход по курсам"
                },
                {
                    tabId: "transfer-group",
                    selected: false,
                    text: "Приказы на переводы"
                },
                {
                    tabId: "expulsion",
                    selected: false,
                    text: "Приказы на отчисление"
                },
                {
                    tabId: "academicLeave",
                    selected: false,
                    text: "Приказы на академический отпуск"
                },
            ]
        }
    },
    setup () {
        return {}
    }
}
</script>

<style scoped>

</style>