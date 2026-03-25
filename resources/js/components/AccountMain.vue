<template lang="pug">
.account-page.mt-4
    .account__title
        h2 Личный кабинет читателя
    .account__tabs
        tabsItems(v-bind:TabsItems="mainTabList")
    .account-main.tab-content.mt-4
        booking
        favourites
        personalInfo
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
import tabsItems from "./TabsItems"
import booking from "./account/Booking"
import personalInfo from "./account/PersonalInfo"
import favourites from "./account/Favourites"

export default {
    components: {
        tabsItems,
        booking,
        favourites,
        personalInfo
    },
    data() {
        return {
            mainTabList: 
            [
                {
                    page: "account",
                    tabId: "booking",
                    selected: false,
                    text: "Учет забронированного"
                },
                {
                    page: "account",
                    tabId: "favourites",
                    selected: false,
                    text: "Избранное"
                },
                {
                    page: "account",
                    tabId: "personalInfo",
                    selected: false,
                    text: "Профиль"
                },
            ],
        }
    },
    computed: {
    },
    methods: {
    },
    async mounted() {
    },
}
</script>

<style scoped>
.nav-tabs .nav-link {
    color: black;
}
</style>