export default {
    actions: {
        async fetchBookSearchTags(ctx) {
            let bookSearchTags = []
            ctx.commit("updateBookSearchTags", bookSearchTags)
        }
    }, 
    mutations: {
        updateBookSearchTags(state, searchTagObject) {
            let wasFound = state.bookSearchTags.some(e => e.label === searchTagObject.label)
            if (wasFound)
                this.commit("deleteBookSearchTags", searchTagObject.label)
            else 
                this.commit("newBookSearchTags", searchTagObject)
        },
        deleteBookSearchTags(state, label)
        {
            state.bookSearchTags = state.bookSearchTags.filter(e => e.label !== label)
        },
        newBookSearchTags(state, obj)
        {
            state.bookSearchTags.push({
                id: obj.id,
                label: obj.label,
                tag: obj.filterNameTag,
                checked: obj.checked
            })
        },
        cleanBookSearchTags(state) { state.bookSearchTags = [] }
    },
    state: {
        bookSearchTags: [],
    },
    getters: {
        bookSearchTags(state) {
            return state.bookSearchTags
        },
    }
}