<template lang="pug">
.lms.row
  .lms-view.col-12.col-sm-9
    lmsCards()
  .lms-info.col-12.col-sm-3
    lmsInfo()
</template>

<script>
import lmsCards from './lms/LmsCards'
import lmsInfo from './lms/LmsInfo'
import {mapActions, mapGetters, mapMutations} from "vuex"

    export default {
        components: {
          lmsCards,
          lmsInfo
        },
        computed: {
          ...mapGetters(["user"])
        },
        methods: {
          ...mapActions(["fetchUser"]),
          ...mapMutations(["updateRole"])
        },
        mounted()
        {
          this.fetchUser()
        }
    }
</script>

<style lang="scss" scoped>

</style>