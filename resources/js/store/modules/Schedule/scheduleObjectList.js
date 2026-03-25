export default {
    actions: {
        async fetchScheduleObjectList(ctx) {
            let scheduleObject = [
                {
                    value: "Информатика",
                },
                {
                    value: "Разработка БД",
                },
                {
                    value: "Web-дизайн",
                },
                {
                    value: "Социология",
                },
                {
                    value: "Физическая культура",
                },
                {
                    value: "Информационное право",
                },
            ]
            ctx.commit("updateScheduleObject", scheduleObject)
        }
    }, 
    mutations: {
        updateScheduleObject(state, scheduleObject) {
            state.scheduleObject = scheduleObject
        },
    },
    state: {
        scheduleObject: [],
    },
    getters: {
        scheduleObject(state) {
            return state.scheduleObject
        },
    }
}