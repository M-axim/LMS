export default {
    actions: {
        async fetchGenreLists(ctx) {
            // Название тегов должно быть с маленькой буквы для поиска
            let genreLists = [
                {
                    id: 1,
                    label: "хоррор",
                    checked: false
                },
                {
                    id: 2,
                    label: "романтика",
                    checked: false
                },
                {
                    id: 3,
                    label: "фэнтези",
                    checked: false
                },
                {
                    id: 4,
                    label: "наука",
                    checked: false
                },
                {
                    id: 5,
                    label: "комедия",
                    checked: false
                },
                {
                    id: 6,
                    label: "история",
                    checked: false
                },
                {
                    id: 7,
                    label: "история России",
                    checked: false
                },
                {
                    id: 8,
                    label: "история Америки",
                    checked: false
                },
                {
                    id: 9,
                    label: "история Германии",
                    checked: false
                },
                {
                    id: 10,
                    label: "будущее",
                    checked: false
                },
                {
                    id: 11,
                    label: "для взрослых",
                    checked: false
                }
            ]
            ctx.commit("fullUpdateGenreLists", genreLists)
        }
    }, 
    mutations: {
        fullUpdateGenreLists(state, genreObj) {
            state.genreLists = genreObj
        },
        genreChecked(state, genreObj = null) {
            if (genreObj === null) {
                state.genreLists.map(e => e.checked = false)
            }
            else {
                let pos = state.genreLists.findIndex(obj => obj.label === genreObj.label)
                state.genreLists[pos].checked = !state.genreLists[pos].checked
            }
        },
    },
    state: {
        genreLists: [],
    },
    getters: {
        genreLists(state) {
            return state.genreLists
        },
    }
}