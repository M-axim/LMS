export default {
    actions: {
        async fetchScheduleList(ctx) {
            let scheduleList = [
                {
                    numberClasses : "13:30",
                    objectList : [
                        {
                            id: 1,
                            weekDate: "08.01.24",
                            objectName: "Разговор о важном",
                            cabinetName: "303",
                            teacherName: "Сергеева"
                        },
                        {
                            id: 2,
                            weekDate: "15.01.24",
                            objectName: "Разговор о важном",
                            cabinetName: "303",
                            teacherName: "Сергеева"
                        }
                    ]
                },
                {
                    numberClasses : 1,
                    objectList : [
                        {
                            id: 1,
                            weekDate: "12.01.24",
                            objectName: "Разработка БД",
                            cabinetName: "304",
                            teacherName: "Сергеев"
                        },
                        {
                            id: 3,
                            weekDate: "08.01.24",
                            objectName: "Информатика",
                            cabinetName: "303",
                            teacherName: "Сергеева"
                        }
                    ]
                },
                {
                    numberClasses : 2,
                    objectList : [
                        {
                            id: 1,
                            weekDate: "12.01.24",
                            objectName: "Разработка БД",
                            cabinetName: "304",
                            teacherName: "Сергеев"
                        },
                        {
                            id: 2,
                            weekDate: "08.01.24",
                            objectName: "Английский",
                            cabinetName: "109",
                            teacherName: "Боева"
                        },
                    ]
                },
                {
                    numberClasses : 3,
                    objectList : []
                },
                {
                    numberClasses : 4,
                    objectList : []
                },
                {
                    numberClasses : 5,
                    objectList : []
                },
                {
                    numberClasses : 6,
                    objectList : []
                },
                {
                    numberClasses : 7,
                    objectList : []
                },
                {
                    numberClasses : 8,
                    objectList : []
                },
                {
                    numberClasses : 9,
                    objectList : []
                },
                {
                    numberClasses : 10,
                    objectList : []
                },
            ]
            ctx.commit("updateScheduleList", scheduleList)
        }
    }, 
    mutations: {
        updateScheduleList(state, scheduleList) {
            state.scheduleList = scheduleList
        },
        newSchedule(state, [newSchedule, count]) {
            for(let numberClasses = newSchedule.numberClasses; numberClasses <= count; numberClasses++) {
                state.scheduleList[numberClasses].objectList.push(...newSchedule.objectList)
            }
        },
        newNumberClasses(state, [numberClass, count]) {
            for(let i = 0; i < count; i++) {
                state.scheduleList.push(...{
                    numberClasses : numberClass + i,
                    objectList : []
                })
            }
        }
    },
    state: {
        scheduleList: [],
    },
    getters: {
        scheduleList(state) {
            return state.scheduleList
        },
    }
}