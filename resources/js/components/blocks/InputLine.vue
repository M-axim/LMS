<template lang="pug">
label.form-label.w-100.fs-5.text-secondary 
    span.ps-2.ms-1.mb-2.d-block {{label}}
    input.form-control.form-control-sm.fs-5.border-dark(:type="type" :name="id" :disabled="disabled" :value="value" @input="$emit('update:value', $event.target.value)")
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "text"
        },
        disabled: {
            type: Boolean,
            default: false
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