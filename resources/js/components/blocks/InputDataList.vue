<template lang="pug">
label.form-label.w-100.fs-6.text-secondary
    span.ps-2.ms-1.mb-2.d-block(v-if="label") {{label}}
    input.form-control.fs-6(:list="randomKey" :placeholder="placeholder" @change="$emit('update:value', $event.target.value)")
    datalist.fs-4(:id="randomKey")
        option(
            v-for="(option, index) in options"
            :key="index"
            :value="option.value")
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
        placeholder: {
            type: String,
            default: "Выберите поле"
        },
        options: {
            type: Array,
            default: [
                {
                    value: "ОУД.01. Русский язык",
                },
                {
                    value: "ОУД.02. Литература",
                },
                {
                    value: "ОУД.03. Иностранный язык",
                },
                {
                    value: "ОУД.04. История",
                },
                {
                    value: "ОУД.05. Физическая культура",
                },
                {
                    value: "ОУД.06. Основы безопасности жизнедеятельности",
                },
                {
                    value: "ОУД.07. Химия",
                },
                {
                    value: "ОУД.08. Обществознание (включая экономику и право)",
                },
                {
                    value: "ОУД.09. Биология",
                },
                {
                    value: "ОП.14. Web-дизайн и программирование",
                },
                {
                    value: "ОП.04. Основы алгоритмизации и программирования",
                },
                {
                    value: "УД.14. Русский родной язык",
                },
                {
                    value: "ОГСЭ.04. Иностранный язык в профессиональной деятельности",
                }
            ]
        }
    },
    data() {
        return {
            randomKey: "datalistOptions" + '-' + Math.random() * 100
        }
    },
    emits: ['update:value'],
}
</script>

<style lang="scss" scoped>

</style>