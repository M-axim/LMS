export default {
    actions: {
        async fetchLanguageList(ctx) {
            // Название тегов должно быть с маленькой буквы для поиска
            let languageList = [
                {
                    id: 1,
                    label: "русский",
                    checked: false
                },
                {
                    id: 2,
                    label: "английский",
                    checked: false
                },
                {
                    id: 3,
                    label: "немецкий",
                    checked: false
                },
                {
                    id: 4,
                    label: "французский",
                    checked: false
                },
                {
                    id: 5,
                    label: "китайский",
                    checked: false
                }
            ]
            ctx.commit("fullUpdateLanguageList", languageList)
        }
    }, 
    mutations: {
        fullUpdateLanguageList(state, languageObj) {
            state.languageList = languageObj
        },
        languageChecked(state, languageObj = null) {
            if (languageObj === null) {
                state.languageList.map(e => e.checked = false)
            }
            else {
                let pos = state.languageList.findIndex(obj => obj.label === languageObj.label)
                state.languageList[pos].checked = !state.languageList[pos].checked
            }
        }
    },
    state: {
        languageList: []
    },
    getters: {
        languageList(state) {
            return state.languageList
        }
    }
}