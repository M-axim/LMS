<template lang="pug">
.lms-courseExercise.row
    .lms-view.col-12.col-sm-9
        lmsExercise()
    .lms-info.col-12.col-sm-3
        lmsInfo()
</template>

<script>
import lmsExercise from './lms/LmsExercise'
import lmsInfo from './lms/LmsInfo'

export default {
    components: {
        lmsInfo,
        lmsExercise
    }
}
</script>

<style lang="scss" scoped>

</style>