<template lang="pug">
.bookListsViews.p-2
    BookListsTag()
    .bookListsViews__info.my-2.fw-bold Результатов: {{ bookListLength }}, страница {{ bookPaginationCurrentPage + 1 }} / {{ bookPaginationPageCount }}
    
    bookListsPagination(
        :pageCount="bookPaginationPageCount"
        :currentPage="bookPaginationCurrentPage"
        v-model:currentPage="bookPaginationCurrentPage"
        v-on:getPage="getPage"
        v-on:increaseCurrentPage="increaseCurrentPage"
        v-on:decreaseCurrentPage="decreaseCurrentPage")

    .bookListsViews__books
        bookCard()
        
    bookListsPagination(
        :pageCount="bookPaginationPageCount"
        :currentPage="bookPaginationCurrentPage"
        v-model:currentPage="bookPaginationCurrentPage"
        v-on:getPage="getPage"
        v-on:increaseCurrentPage="increaseCurrentPage"
        v-on:decreaseCurrentPage="decreaseCurrentPage")

</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
import bookListsPagination from './BookListsPagination'
import bookCard from './BookCard'
import BookListsTag from './BookListsTag';

    export default {
        components: {
            bookListsPagination,
            bookCard,
            BookListsTag
        },
        data() {
            return {
                bookPaginationCurrentPage: 0,
                bookPaginationPageCount: 1
            }
        },
        computed: {
            ...mapGetters(["bookListLength", "bookSearchTags"])
        },
        methods: {
            ...mapMutations(['updateBookListLength']),
            ...mapActions(["fetchBookList"]),

            showPaginationPage(currentPage = 0) {
                this.fetchBookList({page: currentPage, tags: this.bookSearchTags.map(e => e.label)})
            },
            getPage(newCurrentPage) {
                this.bookPaginationCurrentPage = newCurrentPage
            },
            increaseCurrentPage() {
                this.bookPaginationCurrentPage += this.bookPaginationCurrentPage >= this.bookPaginationPageCount ? 0 : 1
            },
            decreaseCurrentPage() {
                this.bookPaginationCurrentPage -= this.bookPaginationCurrentPage <= 0 ? 0 : 1
            }
        },
        mounted() {
            this.showPaginationPage()
            this.bookPaginationPageCount = Math.ceil(this.bookListLength / 10)
        },
        watch: {
            bookPaginationCurrentPage() {
                this.showPaginationPage(this.bookPaginationCurrentPage)
            },
            bookListLength() {
                this.bookPaginationPageCount = Math.ceil(this.bookListLength / 10)
            },
        }
    }
</script>

<style lang="scss" scoped>
.bi::before {
    margin-right: 0.5rem;
}
</style>