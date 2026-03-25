<template lang="pug">
.bookListsViews__tags
    .btn.bookListsViews__tags-item.bg-primary-subtle.text-emphasis-primary.me-1.mb-1(v-for="(elem, index) in bookSearchTags" :key="index")
        .search-tag.d-flex {{ elem.label }}
            span.btn-close.ms-1(type="button" aria-label="Close" @click="deleteSearchTags(elem)")
    button.btn.btn-link(@click="cleanTags()" v-if="bookSearchTags.length !== 0") очистить все фильтры
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"

export default {
    components: {
        
    },
    computed: {
        ...mapGetters(["bookSearchTags"])
    },
    methods: {
        ...mapMutations(["updateBookSearchTags",
                        "deleteBookSearchTags",
                        "cleanBookSearchTags",
                        "languageChecked",
                        "genreChecked"]),

        ...mapActions(["fetchLanguageList", "fetchGenreLists", "fetchBookList"]),
        cleanTags() {
            this.cleanBookSearchTags()
            this.languageChecked()
            this.genreChecked()
            this.fetchBookList({})
        },
        deleteSearchTags(elem) {
            this.deleteBookSearchTags(elem.label)
            switch (elem.tag) {
                case "languageList":
                    this.languageChecked(elem)
                    break;
                case "genresList":
                    this.genreChecked(elem)
                    break;
            }
            this.fetchBookList({page: 0, tags: this.bookSearchTags.map(e => e.label)})
        }
    },
    watch: {
        bookSearchTags: function(e) {
            //console.log(e);
        },
        sortType: function(e) {
            //console.log(e);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>