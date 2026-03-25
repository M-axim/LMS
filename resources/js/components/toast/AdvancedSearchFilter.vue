<template lang="pug">
.ToastAdvancedSearchFilter.position-fixed.top-50.start-50.translate-middle
    .toast#advanceSearchFilter.w-50.m-auto.bg-light(role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false")
        .toast-header.fs-4 Выберите {{ toastTitle }}
            button.ms-auto.btn-close(type="button" data-bs-dismiss="toast" aria-label="Close")
        .toast-body
            .toast-search.mb-2.row.align-items-center
                .col-12.mb-2
                    form.input-group
                        input.form-control(type="text" aria-label="" v-model="searchLine" @input="filter()" placeholder="Поиск по названию")
                        button.btn.btn-outline-secondary(type="button") Поиск
            .toast-content.toast-overflow
                .row.g-0
                    .col-3.filterSearchTag.form-check(v-for="(item, index) in searchFilterList" :key="index")
                        label.form-check-label {{ item.label }}
                            input.form-check-input(type="checkbox" :value="index" :checked="item.checked" @change="updateInput(item)")
        .toast-footer.fs-4.text-end.m-2
            button.btn.btn-outline-secondary.me-auto.p-2.ms-2(type="button" data-bs-dismiss="toast") Выйти
            button.btn.btn-outline-secondary.me-auto.p-2.ms-2(type="button" @click="cleanTags()") Очистить
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    data() {
        return {
            filterList: [],
            searchFilterList: [],
            toastTitle: "",
            searchLine: "",
            bookSearchObject: {}
        }
    },
    computed: {
        ...mapGetters(["languageList", 'genreLists', 'bookSearchFilterType', 'bookSearchTags'])
    },
    methods: {
        ...mapActions(["fetchLanguageList", 'fetchGenreLists', 'fetchBookList']),
        ...mapMutations(['updateBookSearchFilterType',
                        "updateBookSearchTags",
                        "languageChecked",
                        "genreChecked",
                        "cleanBookSearchTags"]),

        updateInput(item) {
            item.filterNameTag = this.bookSearchFilterType
            this.updateBookSearchTags(item)
            this.bookSearchObject[this.bookSearchFilterType].changeChecked(item)
            this.fetchBookList({page: 0, tags: this.bookSearchTags.map(e => e.label)})
        },
        cleanTags() {
            this.cleanBookSearchTags()
            this.languageChecked()
            this.genreChecked()
            this.fetchBookList({})
        },
        filter() {
            if (this.searchLine === "")
                this.searchFilterList = this.filterList
            else
                this.searchFilterList = this.filterList.filter(w => this.searchLine.split().every(l => w.label.includes(l)))
        },
    },
    watch: {
        bookSearchFilterType(filterNameTag) {
            this.filterList = this.bookSearchObject[filterNameTag].filterList
            this.searchFilterList = this.filterList
            this.toastTitle = this.bookSearchObject[filterNameTag].label
        }
    },
    async mounted() {
        this.bookSearchObject = {
            "languageList" : {
                label: "язык",
                filterList: this.languageList,
                changeChecked: this.languageChecked
            },
            "genresList" : {
                label: "жанр",
                filterList: this.genreLists,
                changeChecked: this.genreChecked
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.toast-overflow {
    height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
}
.ToastAdvancedSearchFilter {
    z-index: 2000;
}
</style>