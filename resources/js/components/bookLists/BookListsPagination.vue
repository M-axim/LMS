<template lang="pug">
.bookListsViews__pagination
    nav(aria-label="Навигация по книгам")
        ul.pagination
            li.page-item
                a.page-link.user-select-none(href="#" aria-label="Назад" :class="{disabled: currentPage === 0}" @click="$emit('decreaseCurrentPage')")
                    span(aria-hidden="true") &laquo;
            li.page-item(v-for="(item, index) in pageCount" :key="index")
                a.page-link.user-select-none(href="#" :class="{active: index === currentPage}" @click="$emit('getPage', --index)") {{ ++index }}
            li.page-item
                a.page-link.user-select-none(href="#" aria-label="Вперед" :class="{disabled: currentPage === pageCount - 1}" @click="$emit('increaseCurrentPage')")
                    span(aria-hidden="true") &raquo;
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
export default {
    props: {
        pageCount: {
            type: Number,
            default: 1
        },
        currentPage: {
            type: Number,
            default: 0
        }
    },
    emits: ['getPage', 'increaseCurrentPage', 'decreaseCurrentPage'],
}
</script>

<style lang="scss" scoped>

</style>