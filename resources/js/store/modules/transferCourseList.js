export default {
    actions: {
        async fetchTransferCourseList(ctx) {
            let transferCourseList = [
                {
                    title: "Перевод на первый курс",
                    DecreeValue: "К-224",
                    DecreeDate: "2003-06-28",
                },
                {
                    title: "Перевод на второй курс",
                    DecreeValue: "12f",
                    DecreeDate: "2005-06-28",
                },
                {
                    title: "Перевод на третий курс",
                    DecreeValue: "",
                    DecreeDate: "",
                },
                {
                    title: "Перевод на четвертый курс",
                    DecreeValue: "",
                    DecreeDate: "",
                }
            ]
            ctx.commit("updateTransferCourseList", transferCourseList)
        }
    }, 
    mutations: {
        updateTransferCourseList(state, transferCourseList) {
            state.transferCourseList = transferCourseList
        }
    },
    state: {
        transferCourseList: [],
    },
    getters: {
        transferCourseList(state) {
            return state.transferCourseList
        },
    }
}