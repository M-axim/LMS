<template lang="pug">
.grades.mt-2
    gradesMain
</template>
    
<script>

import {mapGetters, mapActions, mapMutations} from "vuex"
import gradesMain from "../components/GradesMain"

export default {
    components: {
        gradesMain
    },
}
</script>

<style lang="scss" scoped>

</style>