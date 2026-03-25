<template lang="pug">
.lmsCourse-setting.mb-2(v-if="user.role !== 'student'")
    button.btn.btn-primary.me-2(data-bs-toggle="modal" data-bs-target="#newExercise" @click="resetExerciseObject()") Новое задание
    button.btn.btn-primary.me-2(data-bs-toggle="modal" data-bs-target="#newTab") Новый предмет
.lmsCourse-accordion
    lmsCourseAccordion()
newExercise()
newTab()
</template>

<script>
import lmsCourseAccordion from './LmsCourseAccordion'
import newExercise from '../toast/NewExercise.vue'
import newTab from './../toast/NewTab'

import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
    components: {
        lmsCourseAccordion,
        newExercise,
        newTab
    },
    computed: {
        ...mapGetters(["user"]),
    },
    methods: {
        ...mapMutations(["resetExerciseObject"]),
        ...mapActions(["fetchUser"])
    },
    async mounted() {
        await this.fetchUser()
    }
}
</script>

<style lang="scss" scoped>

</style>