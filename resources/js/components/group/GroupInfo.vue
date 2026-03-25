<template lang="pug">
form.row
    .col-12.col-lg-6(v-for="(groupInfoSide, index) in groupInfo" :key="index")
        .personal-info__line.mb-3(v-for="groupInfoItem in groupInfoSide")
            label.form-label.w-100.fs-5.ps-2.ms-1.text-secondary(:for="groupInfoItem.labelId") {{groupInfoItem.labelName}}
            input.form-control.fs-4#personalFullname(:type="groupInfoItem.inputType" :value="groupInfoItem.inputValue")
    .w-100.pt-1.text-center.text-lg-end
        button.btn.btn-primary.fs-4(type="submit") Обновить данные группы
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    computed: {
        ...mapGetters(["groupInfo"])
    },
    methods: {
        ...mapActions(["fetchGroupInfo"])
    },
    async mounted() {
        this.fetchGroupInfo()     
    },
}
</script>

<style scoped>

</style>