<template lang="pug">
.lms.mt-2
    courseMain
</template>
    
<script>

import {mapGetters, mapActions, mapMutations} from "vuex"
import courseMain from "../components/CourseMain"

export default {
    components: {
        courseMain
    },
}
</script>

<style lang="scss" scoped>

</style>