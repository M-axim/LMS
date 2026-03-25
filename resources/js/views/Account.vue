<template lang="pug">
.accout.mt-3.mb-3
    accountMain
</template>
    
<script>

import {mapGetters, mapActions, mapMutations} from "vuex"
import accountMain from "../components/AccountMain.vue";

export default {
    components: {
        accountMain
    },
}
</script>

<style lang="scss" scoped>

</style>