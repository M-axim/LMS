export default {
    actions: {
        async fetchExpulsionList(ctx) {
            let expulsionList = [
                {
                    DecreeValue: "К-274",
                    DecreeDate: "2003-06-28",
                },
                {
                    DecreeValue: "",
                    DecreeDate: "",
                },
                {
                    DecreeValue: "",
                    DecreeDate: "",
                }
            ]
            ctx.commit("updateExpulsionList", expulsionList)
        }
    }, 
    mutations: {
        updateExpulsionList(state, expulsionList) {
            state.expulsionList = expulsionList
        },
        newExpulsionItem(state) {
            state.expulsionList.push(
            {
                DecreeValue: "",
                DecreeDate: "",
            })
        }
    },
    state: {
        expulsionList: [],
    },
    getters: {
        expulsionList(state) {
            return state.expulsionList
        },
    }
}