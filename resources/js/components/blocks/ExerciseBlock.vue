<template lang="pug">
.exercise-block.fs-5(v-for="(elem, index) in blockList" :key="index")

    .exercise-text(v-if="elem.type === `text`")
        p.m-1 {{ elem.name }}

    .exercise-file(v-if="elem.type === `link`")
        a.m-1(:href="elem.value") {{ elem.name }}

    .exercise-file(v-if="elem.type === `file`")
        a.m-1(:href="elem.value" download) {{ elem.name }}
        button.btn.file-viewer.p-1(@click.prevent="Docx(elem.value)")
            eye()

    .exercise-list(v-if="elem.type === `list`")
        p.m-1 {{ elem.name }}
        .list.ms-3
            ExerciseBlock(:blockList="elem.value")

    .exercise-list(v-if="elem.type === `test`")
        button.btn.btn-warning.m-1(data-bs-toggle="modal" data-bs-target="#exerciseTestModal") {{ elem.name }}
v-docx()
exerciseTest()
</template>

<script>
import {mapMutations} from "vuex"
import eye from "../icons/Eye"
import exerciseTest from "../toast/ExerciseTest"
export default {
    name: "ExerciseBlock",
    components: {
        eye,
        exerciseTest
    },
    props: {
        blockList: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            fileHref: ""
        }
    },
    methods: {
        ...mapMutations(["updatePathToDocx", "actionDefault"]),
        Docx (path) {
            const myModalAlternative = new bootstrap.Modal('#docxModal', {})
            myModalAlternative.show()
            this.updatePathToDocx(path)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>