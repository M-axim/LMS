<template lang="pug">
ul.nav.nav-tabs.fs-6.mt-3.text-nowrap.flex-nowrap.position-relative.overflow-auto(role="tablist")
    li.nav-item.p-1(role="presentation" v-for="(tabsItem, index) in TabsItems" :key="index")
        button.nav-link.text-dark(
            data-bs-toggle="tab"
            :data-bs-target="'#' + tabsItem.tabId"
            type="button"
            role="tab"
            :aria-controls="tabsItem.tabId"
            :aria-selected="tabsItem.selected"
            :class="{active: tabsItem.selected}") {{tabsItem.text}}
</template>

<script>
export default {
    props: {
        TabsItems: {
            type: Array
        }
    },
}
</script>

<style lang="scss" scoped>

</style>