export default {
    actions: {
        async fetchAcademicLeaveList(ctx) {
            let academicLeaveList = [
                {
                    DecreeValue: "К-274",
                    DecreeDate: "2003-06-28",
                    DecreeDateTo: "2023-06-28",
                    DecreeDateBy: "2003-07-28"
                },
                {
                    DecreeValue: "",
                    DecreeDate: "",
                    DecreeDateTo: "",
                    DecreeDateBy: ""
                },
                {
                    DecreeValue: "",
                    DecreeDate: "",
                    DecreeDateTo: "",
                    DecreeDateBy: ""
                }
            ]
            ctx.commit("updateAcademicLeaveList", academicLeaveList)
        }
    }, 
    mutations: {
        updateAcademicLeaveList(state, academicLeaveList) {
            state.academicLeaveList = academicLeaveList
        },
        newAcademicLeaveItem(state) {
            state.academicLeaveList.push(
            {
                DecreeValue: "",
                DecreeDate: "",
                DecreeDateTo: "",
                DecreeDateBy: ""
            })
        }
    },
    state: {
        academicLeaveList: [],
    },
    getters: {
        academicLeaveList(state) {
            return state.academicLeaveList
        },
    }
}