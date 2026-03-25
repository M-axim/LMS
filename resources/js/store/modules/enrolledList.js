export default {
    actions: {
        async fetchEnrolledList(ctx) {
            let enrolledList = [
                {
                    decreeValue: "К-274",
                    decreeDate: "2003-06-28",
                    courseValue: 2,
                    groupValue: "21-и",
                    enrollmentDate: "2003-07-28" 
                },
                {
                    decreeValue: "К-280",
                    decreeDate: "2004-06-28",
                    courseValue: 3,
                    groupValue: "31-и",
                    enrollmentDate: "2004-07-28" 
                },
                {
                    decreeValue: "К-291",
                    decreeDate: "2005-06-28",
                    courseValue: 4,
                    groupValue: "41-и",
                    enrollmentDate: "2005-07-28" 
                },
            ]
            ctx.commit("updateEnrolledList", enrolledList)
        }
    }, 
    mutations: {
        updateEnrolledList(state, enrolledList) {
            state.enrolledList = enrolledList
        },
        newEnrolledItem(state) {
            state.enrolledList.push(
            {
                decreeValue: "",
                decreeDate: "",
                courseValue: 1,
                groupValue: "",
                enrollmentDate: "" 
            })
        }
    },
    state: {
        enrolledList: [],
    },
    getters: {
        enrolledList(state) {
            return state.enrolledList
        },
    }
}