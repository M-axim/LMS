export default {
    mutations: {
        updateBookSearchFilterType(state, filterType) {
            state.bookSearchFilterType = filterType
        },
    },
    state: {
        bookSearchFilterType: [],
    },
    getters: {
        bookSearchFilterType(state) {
            return state.bookSearchFilterType
        },
    }
}