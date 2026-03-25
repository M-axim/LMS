<template lang="pug">
.homeWork.mt-2
    homeWorkMain
</template>
    
<script>

import {mapGetters, mapActions, mapMutations} from "vuex"
import homeWorkMain from "../components/HomeWorkMain"

export default {
    components: {
        homeWorkMain
    },
}
</script>

<style lang="scss" scoped>

</style>