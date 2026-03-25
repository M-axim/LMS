export default {
    actions: {
        async fetchScheduleTeacherList(ctx) {
            let scheduleTeacher = [
                {
                    value: "Сергеев",
                },
                {
                    value: "Багров",
                },
                {
                    value: "Кальницких",
                },
                {
                    value: "Харитонов",
                },
                {
                    value: "Сергеева",
                },
                {
                    value: "Тоневицкий",
                },
            ]
            ctx.commit("updatesSheduleTeacher", scheduleTeacher)
        }
    }, 
    mutations: {
        updatesSheduleTeacher(state, scheduleTeacher) {
            state.scheduleTeacher = scheduleTeacher
        },
    },
    state: {
        scheduleTeacher: [],
    },
    getters: {
        scheduleTeacher(state) {
            return state.scheduleTeacher
        },
    }
}