<template lang="pug">
form.form.bookListsSearch.accordion#accordionSearch.p-2.border.border-light
    .accordion-item(v-for="(elem, index) in accordionItems" :key="index")
        .accordion-header
            button.accordion-button(type="button" :data-bs-toggle=`"collapse" + index` :data-bs-target=`"#collapse-" + index` aria-expanded="true" :aria-controls=`"collapse-" + index`)
                span.text-bold {{ elem.title }}
        .accordion-collapse.collapse.show(:id=`"collapse-" + index` :data-bs-parent=`"collapse-" + index`)
            .accordion-body
                v-inputSelect(v-if="elem.nameInput === 'select'" v-model:value="sortType")

                v-inputCheck(v-else-if="elem.nameInput === 'check'"
                :items="elem.options"
                :filterNameTag="elem.filterNameTag"
                v-model:value="bookSearchTags"
                v-on:updateInput="updateInput")

                v-inputNumber(:compare="true" v-else-if="elem.nameInput === 'number'")
                a.btn.btn-outline(@click="showToas('advanceSearchFilter', elem.filterNameTag)" v-if="elem.advancedSearch") Еще
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

    export default {
        components: {
            
        },
        data() {
            return {
                accordionItems: [],
                sortType: ""
            }
        },
        computed: {
            ...mapGetters(["bookSearchFilterType", "bookSearchTags", "languageList", "genreLists"])
        },
        methods: {
            ...mapMutations(["updateBookSearchFilterType", "updateBookSearchTags", "languageChecked", "genreChecked"]),
            ...mapActions(["fetchLanguageList", "fetchGenreLists", "fetchBookList"]),

            showToas(id, filterNameTag = null) {
                if (filterNameTag !== null)
                    this.updateBookSearchFilterType(filterNameTag)
                let toast = document.getElementById(id)
                toast = new bootstrap.Toast(toast)
                toast.show()
            },
            updateInput(item, filterNameTag) {
                item.filterNameTag = filterNameTag
                this.updateBookSearchTags(item)
                switch (item.filterNameTag) {
                    case "languageList":
                        this.languageChecked(item)
                        break;
                    case "genresList":
                        this.genreChecked(item)
                        break;
                }
                this.fetchBookList({page: 0, tags: this.bookSearchTags.map(e => e.label)})
            }
        },
        watch: {
            languageList: function(e) {
                console.log(e);
            },
            sortType: function(e) {
                //console.log(e);
            }
        },
        async mounted() {
            this.fetchLanguageList()
            this.fetchGenreLists()
            this.accordionItems = [
                    {
                        title: "Сортировка",
                        advancedSearch: false,
                        nameInput: "select",
                        filterNameTag: "",
                        options: null
                    },
                    {
                        title: "Язык",
                        advancedSearch: true,
                        nameInput: "check",
                        filterNameTag: "languageList",
                        options: this.languageList.slice(0, 3)
                    },
                    {
                        title: "Жанр",
                        advancedSearch: true,
                        nameInput: "check",
                        filterNameTag: "genresList",
                        options: this.genreLists.slice(0, 3)
                    },
                    {
                        title: "Год издания",
                        advancedSearch: false,
                        nameInput: "number",
                        filterNameTag: "",
                        options: null
                    },
                ]
        },
    }
</script>

<style lang="scss" scoped>

</style>