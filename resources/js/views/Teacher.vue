<template lang="pug">
.teacher.mt-2
    teacherMain
</template>
    
<script>

import {mapGetters, mapActions, mapMutations} from "vuex"
import teacherMain from "../components/TeacherMain"

export default {
    components: {
        teacherMain
    },
}
</script>

<style lang="scss" scoped>

</style>