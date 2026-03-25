<template lang="pug">
.student.mt-2
    studentMain
</template>
    
<script>

import {mapGetters, mapActions, mapMutations} from "vuex"
import studentMain from "../components/StudentMain"

export default {
    components: {
        studentMain
    },
}
</script>

<style lang="scss" scoped>

</style>