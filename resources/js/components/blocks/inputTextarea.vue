<template lang="pug">
label.form-label.w-100.fs-6.text-secondary 
    span.ps-2.ms-1.mb-2.d-block {{label}}
    textarea.form-control.fs-4(:rows="rows" :name="id" :value="value")
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
            default: "Номер приказа"
        },
        rows: {
            type: Number,
            default: 3
        }
    }
}
</script>

<style scoped>

</style>