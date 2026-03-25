export default {
    actions: {
        async fetchTransferGroupList(ctx) {
            let transferGroupList = [
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
            ctx.commit("updateTransferGroupList", transferGroupList)
        }
    }, 
    mutations: {
        updateTransferGroupList(state, transferGroupList) {
            state.transferGroupList = transferGroupList
        },
        newTransferGroupItem(state) {
            state.transferGroupList.push(
            {
                DecreeValue: "",
                DecreeDate: "",
            })
        }
    },
    state: {
        transferGroupList: [],
    },
    getters: {
        transferGroupList(state) {
            return state.transferGroupList
        },
    }
}