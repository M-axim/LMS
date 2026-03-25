<template lang="pug">
.tab-pane.fade(role="tabpanel" :aria-labelledby="`${documentTitle}-tab`" :id="documentTitle")
    form.account-form.form
        .row
            .account-form__main.col-12.col-sm-6.mb-3
                .account-form__title
                    h3 Основные данные
                .account-form__line.mt-3
                    v-inputLine(v-model:value="surName" :label="`Фамилия*`")
                .account-form__line.mt-3
                    v-inputLine(v-model:value="name" :label="`Имя*`")
                .account-form__line.mt-3
                    v-inputLine(v-model:value="lastName" :label="`Фамилия(при наличии)`")
            .account-form__main.col-12.col-sm-6.mb-3
                .account-form__title
                    h3 Изменение пароля
                .account-form__line.mt-3
                    v-inputLine(v-model:value="currentPassword" :label="`Текущий пароль`" :type="`password`")
                .account-form__line.mt-3
                    v-inputLine(v-model:value="newPassword" :label="`Новый пароль`" :type="`password`")
                .account-form__line.mt-3
                    v-inputLine(v-model:value="repeatPassword" :label="`Повторить пароль`" :type="`password`")
            .account-form__continfo.col-12.col-sm-6.mb-3
                .account-form__title
                    h3 Контактные данные
                .account-form__line.mt-3
                    v-inputLine(v-model:value="email" :label="`Адрес контактной почты`" :type="`email`")
                .account-form__line.mt-3
                    v-inputLine(v-model:value="tel" :label="`Мобильный телефон`" :type="`number`")
            .account-form__about.col-12.col-sm-6.mb-3
                .account-form__title
                    h3 Информация о себе
                .account-form__line.mt-3
                    v-inputDatalist(:label="`Образование / ученая степень`" :placeholder="`Выберите из списка`" :options="educationLists")
                .account-form__line.mt-3
                    v-inputDatalist()
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default
{
    components: {
        
    },
    data() {
        return {
            educationLists: [
                {
                    value: "Аспирант"
                },
                {
                    value: "Специалист с высшем стажем"
                },
                {
                    value: "Студент первого курса"
                },
                {
                    value: "Студент второго курса"
                },
                {
                    value: "Студент третьего курса"
                },
                {
                    value: "Студент четвертого курса"
                },
            ],
            documentTitle: "personalInfo",
            surName: "",
            name: "",
            lastName: "",
            currentPassword: "",
            newPassword: "",
            repeatPassword: "",
            email: "",
            tel: ""
        }
    },
    computed: {
    },
    methods: {
    },
    watch: {
        name: function(e) {
            console.log(e);
        },
        surName: function(e) {
            console.log(e);
        }
    },
    async mounted() {
        //this.fetchWarehouseInventory()
    },
}
</script>

<style lang="scss" scoped>
</style>
