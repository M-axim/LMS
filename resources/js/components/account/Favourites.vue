<template lang="pug">
.tab-pane.fade(role="tabpanel" :aria-labelledby="`${documentTitle}-tab`" :id="documentTitle")
    .favourites-search
        form.input-group
            label.form-label.col.m-0()
                input.form-control(type="text" placeholder="Поиск по: ")
            button.btn.btn-secondary Поиск
    .favourites-booking.mt-3
        .book-card.card.mb-3.bg-light.p-2.w-100(v-for="(item, index) in 10" :key="index")
            .row
                .col-md-3
                    .col-img
                        img.w-100.rounded-start(src="https://placehold.co/50")
                .col-md-9
                    .card-body.p-1
                        h5.card-title.fw-bold Заголовок книги
                        p.card-text О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.
                        p.card-text Какой-то текст
                        p.card-text Какой-то текст
            .text-end.border-top.border-info.mt-2
                button.btn.mt-2.ms-2
                    i.bi.bi-star В избранное
                button.btn.btn-secondary.mt-2.ms-2(:class="{'text-decoration-line-through': index, disabled : index}") Забронировать
                button.btn.btn-secondary.mt-2.ms-2.text-decoration-line-through.disabled Нет в наличии
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default
{
    components: {
        
    },
    data() {
        return {
            documentTitle: "favourites"
        }
    },
    computed: {
    },
    methods: {
    },
    watch: {
        //warehouseCurrentTab: function () {
            //if (this.documentTitle === this.warehouseCurrentTab)
            //this.fetchWarehouseInventory()
        //},
    },
    async mounted() {
        //this.fetchWarehouseInventory()
    },
}
</script>

<style lang="scss" scoped>

.good-col:hover {
    top: 5px;
}
.warehouse-table {
    height: 500px;
}
</style>
