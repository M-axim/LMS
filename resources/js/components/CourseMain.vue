<template lang="pug">
.lms-course.row
    h2.mb-4 Задания
    .lms-view.col-12.col-sm-9
        lmsCourse()
    .lms-info.col-12.col-sm-3
        lmsInfo()

</template>

<script>
import lmsCourse from './lms/LmsCourse'
import lmsInfo from './lms/LmsInfo'
import {mapActions, mapGetters, mapMutations} from "vuex"

    export default {
        components: {
            lmsCourse,
            lmsInfo,
        },
        data() {
            return {
                docValue: "../files/docx/1.docx",
                docType: "office"
            }
        },
        computed: {
            ...mapGetters(["user"])
        },
        methods: {
            ...mapActions(["fetchUser"]),
            ...mapMutations(["updateRole"]),
        },
        mounted()
        {
            this.fetchUser()
        }
    }
</script>

<style lang="scss" scoped>

</style>