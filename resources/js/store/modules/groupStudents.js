export default {
    actions: {
        async fetchGroupStudents(ctx) {

            let groupStudentsCount = 0

            let groupStudents = [
                {
                    fullName: "Савин Артем",
                    enrollmentDate: "2022-09-01",
                },
            ]
            
            groupStudentsCount = groupStudents.length

            ctx.commit("updateGroupStudents", groupStudents)
            ctx.commit("updateGroupStudentsCount", groupStudentsCount)
        }
    }, 
    mutations: {
        updateGroupStudents(state, groupStudents) {
            state.groupStudents = groupStudents
        },
        updateGroupStudentsCount(state, groupStudentsCount) {
            state.groupStudentsCount = groupStudentsCount
        }
    },
    state: {
        groupStudents: [],
        groupStudentsCount: 0
    },
    getters: {
        groupStudents(state) {
            return state.groupStudents
        },
        groupStudentsCount(state) {
            return state.groupStudentsCount
        }
    }
}