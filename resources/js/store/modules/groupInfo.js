export default {
    actions: {
        async fetchGroupInfo(ctx) {
            let groupInfo = [
                [
                    {
                        id: 1,
                        labelId: "groupName",
                        labelName: "Название группы",
                        inputType: "text",
                        inputValue: "11-И"
                    },
                    {
                        id: 2,
                        labelId: "groupCurator",
                        labelName: "ФИО куратора",
                        inputType: "text",
                        inputValue: "Багров Дмитрий Сергеевич"
                    },
                    {
                        id: 5,
                        labelId: "groupSubjectList",
                        labelName: "Обучаются по программе",
                        inputType: "text",
                        inputValue: "11-И"
                    }
                ],
                [
                    {
                        id: 3,
                        labelId: "groupCount",
                        labelName: "Кол-во студентов",
                        inputType: "text",
                        inputValue: "24"
                    },
                    {
                        id: 4,
                        labelId: "groupReceiptDate",
                        labelName: "Дата зачисления",
                        inputType: "date",
                        inputValue: "2022-09-01"
                    }
                ],
            ]
            ctx.commit("updateGroupInfo", groupInfo)
        }
    }, 
    mutations: {
        updateGroupInfo(state, groupInfo) {
            state.groupInfo = groupInfo
        }
    },
    state: {
        groupInfo: [],
    },
    getters: {
        groupInfo(state) {
            return state.groupInfo
        },
    }
}