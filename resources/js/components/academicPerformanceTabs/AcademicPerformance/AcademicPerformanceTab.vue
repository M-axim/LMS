<template lang="pug">
.academic-performance-course.tab-pane.fade(v-for="(tabItem, index) in academicPerformanceList" role="tabpanel" :aria-labelledby="`course-${++index}`" :id="`course-${index}`" :class="{show: index === 0, active: index === 0}")
    form(@submit="checkForm")
        academicPerformansCourse(v-bind:subjects="tabItem.subjects", v-bind:semester="index")
        .mt-3.w-100.text-center.text-lg-start
            button.btn.btn-primary.fs-4.me-3.mb-2(type="submit" :data-id="`${index - 1}`") Обновить данные
</template>

<script>
import academicPerformansCourse from "./AcademicPerformanceCourse"
import {mapActions, mapGetters} from "vuex"
export default {
    components: {
        academicPerformansCourse
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