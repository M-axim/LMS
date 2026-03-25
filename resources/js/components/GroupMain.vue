<template lang="pug">
.group__info.mt-4
    groupInfo

.group__students.mt-5
    groupStudents

</template>

<script>
import groupInfo from './group/groupInfo'
import groupStudents from './group/GroupStudents'


export default {
    components: {
        groupInfo,
        groupStudents
    }
}
</script>

<style lang="sass" scoped>

</style>