<template lang="pug">
.tab-pane.fade(role="tabpanel" :aria-labelledby="`${documentTitle}-tab`" :id="documentTitle")
    .booking-calendar
        calendar()
    .booking-cards.mt-4
        bookCard()
</template>

<script>
import calendar from '../blocks/Calendar'
import bookCard from '../bookLists/BookCard'
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default
{
    components: {
        bookCard,
        calendar
    },
    data() {
        return {
            documentTitle: "booking"
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
