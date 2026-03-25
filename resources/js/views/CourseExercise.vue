<template lang="pug">
.lms.mt-2
    courseExerciseMain()
</template>
    
<script>

import {mapGetters, mapActions, mapMutations} from "vuex"
import courseExerciseMain from "../components/CourseExerciseMain"

export default {
    components: {
        courseExerciseMain
    },
}
</script>

<style lang="scss" scoped>

</style>