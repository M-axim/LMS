<template lang="pug">
label.form-label.w-100.fs-5.text-secondary.m-0(v-if="compare === false")
    span.ps-2.ms-1.mb-2.d-block(v-if="label") {{label}}
    select.form-select.form-select-sm.border-dark.fs-5(aria-label="Выберите группу" @change="$emit('update:value', $event.target.value)")
        option(
            v-for="(option, index) in options"
            :key="index"
            :value="option.id"
            :selected="option.id === rating") {{option.text}}
select.form-select.fs-6.border.py-0(aria-label="Выберите группу" @change="$emit('update:value', $event.target.value)" v-else)
    option(
        v-for="(option, index) in options"
        :key="index"
        :value="option.id"
        :selected="option.id === rating") {{option.text}}
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ""
        },
        rating: {
            type: Number,
            default: -1
        },
        value: {
            type: String,
            default: ""
        },
        compare: {
            type: Boolean,
            default: false
        },
        options: {
            type: Array,
            default: [
                {
                    id: 1,
                    text: "Урок 1"
                },
                {
                    id: 2,
                    text: "Урок 2"
                },
                {
                    id: 3,
                    text: "Урок 3"
                },
                {
                    id: 4,
                    text: "Урок 4"
                },
                {
                    id: 5,
                    text: "Урок 5"
                },
            ]
        }
    },
    emits: ['update:value'],
    methods: {
        changeValue(value) {
            this.$emit("update:value", value)
        }
    },
}
</script>

<style scoped>

</style>