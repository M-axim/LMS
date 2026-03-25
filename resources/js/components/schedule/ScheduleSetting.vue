<template lang="pug">
.schedule-setting 
    button.btn.btn-secondary.mt-2.w-100(v-for="(elem, index) in btnList" 
    :key="index" 
    @click="showToas(elem.toast)" 
    :class="{'btn-warning' : elem.warning}") {{ elem.text }}
</template>

<script>

export default {
    data() {
        return {
            btnList: [
                {
                    text: "Добавить предмет",
                    toast: "newObject",
                    warning: false
                },
                {
                    text: "Добавить доп. занятие",
                    toast: "newAdditionalLesson",
                    warning: false
                },
                {
                    text: "Добавить урок",
                    toast: "newLesson",
                    warning: true
                },
            ]
        }
    },
    methods: {
        showToas(id) {
            let toast = document.getElementById(id)
            toast = new bootstrap.Toast(toast)
            toast.show()
        },
    }
}
</script>

<style lang="scss" scoped>

</style>