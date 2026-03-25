<template lang="pug">
.book-card.card.mb-3.bg-light.p-2.w-100(v-for="(item, index) in bookList" :key="index")
    .row
        .col-md-3
            .col-img.h-100
                img.w-100.h-100.rounded-start(:src="item.imgSrc")
        .col-md-9
            .card-body.p-1
                h5.card-title.fw-bold {{ item.title }}
                p.card-text.m-1 {{ item.description }}
                p.card-text.m-1 Год издания: {{ item.publicationDate }}
                p.card-text.d-flex.fs-4.m-1 Теги:
                ul.list-group.list-group-horizontal.list-unstyled.d-flex.flex-wrap.border
                    li.list-group-item.p-1.m-1.border.rounded-3.user-select-none(v-for="(elem, index) in item.tags") {{ elem }}
    .text-end.border-top.border-info.mt-2
        button.btn.mt-2.ms-2
            i.bi.bi-star В избранное
        button.btn.btn-secondary.mt-2.ms-2.text-decoration-line-through.disabled(v-if="!item.bookAvailable") Нет в наличии
        button.btn.btn-secondary.mt-2.ms-2(v-else) Забронировать
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
export default {
    components: {
    },
    computed: {
        ...mapGetters(["bookList"])
    }
}
</script>

<style lang="scss" scoped>

</style>