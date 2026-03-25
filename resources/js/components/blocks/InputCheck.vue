<template lang="pug">
.form-check(v-for="(item, index) in items" :key="index")
    label.form-check-label {{ item.label[0].toUpperCase() + item.label.substr(1) }}
        input.form-check-input(type="checkbox" :value="index" :checked="item.checked" @change="$emit('updateInput', item, filterNameTag)")
</template>

<script>
export default {
    props: {
        value: {
            type: Array,
            default: []
        },
        filterNameTag: {
            type: String,
            default: ""
        },
        items: {
            type: Array,
            default: [
                {
                    label: "1"
                },
                {
                    label: "2"
                },
                {
                    label: "3"
                }
            ]
        }
    },
    emits: ['updateInput'],
}
</script>

<style scoped>

</style>