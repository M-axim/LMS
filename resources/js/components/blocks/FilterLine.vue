<template lang="pug">
button.btn.btn-secondary.btn-sm(data-bs-toggle="button" :id="identificator" @click="filterChange") {{ text }}
</template>

<style lang="scss">
</style>

<script>
import {mapGetters, mapActions, mapMutations} from "vuex"

export default {
    props: {
        identificator: {
            type: String,
            default: "NULL"
        },
        text: {
            type: String,
            default: "NULL"
        }
    },
    computed: mapGetters(["selectFilter"]),
    methods: {
        ...mapMutations(["updateSelectFilter"]),
        ...mapActions(["fetchVideo"]),
        filterChange(e) {
            this.updateSelectFilter(e.target.id)
            this.fetchVideo(this.selectFilter)
        }
    },
}
</script>