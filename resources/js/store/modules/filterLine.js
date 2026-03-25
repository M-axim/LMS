export default {
    actions: {
        async fetchItems(ctx) {
            const filterItems = [
                {identificator: "all", text: "Все"},
                {identificator: "videogame", text: "Видеоигры"},
                {identificator: "music", text: "Музыка"},
                {identificator: "myMusic", text: "Джемы"},
                {identificator: "stream", text: "Сейчас в эфире"},
                {identificator: "sport", text: "Спорт"},
                {identificator: "new", text: "Недавно опубликованные"}
            ]
            ctx.commit("updateFilterItems", filterItems)
        }
    },
    mutations: {
        updateFilterItems(state, filterItems) {
            state.filterItems = filterItems
        },
        updateSelectFilter(state, selectFilter) {
            state.selectFilter = selectFilter
            console.log(state.selectFilter);
        }
    },
    state: {
        filterItems: [],
        selectFilter: ""
    },
    getters: {
        filterItems(state) {
            return state.filterItems
        },
        selectFilter(state) {
            return state.selectFilter
        }
    }
}