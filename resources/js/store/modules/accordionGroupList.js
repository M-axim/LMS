export default {
    actions: {
        async fetchAccordionGroupList(ctx, tabId) {

            let accordionGroupList = [
                {
                    groupName: "11-И",
                    curatorFullName: "Багров Дмитрий Сергеевич",
                    studentCount: "24",
                    enrollmentDate: "2022-09-01"
                },
                {
                    groupName: "21-И",
                    curatorFullName: "Багров Дмитрий Сергеевич",
                    studentCount: "24",
                    enrollmentDate: "2021-09-01"
                },
                {
                    groupName: "31-И",
                    curatorFullName: "Багров Дмитрий Сергеевич",
                    studentCount: "24",
                    enrollmentDate: "2020-09-01"
                },
                {
                    groupName: "41-И",
                    curatorFullName: "Багров Дмитрий Сергеевич",
                    studentCount: "24",
                    enrollmentDate: "2019-09-01"
                },
            ]
            
            ctx.commit("updateAccordionGroupList", accordionGroupList)
        }
    }, 
    mutations: {
        updateAccordionGroupList(state, accordionGroupList) {
            state.accordionGroupList = accordionGroupList
        },
        newAccordionGroupList(state) {
            state.accordionGroupList.push(
            {
                groupName: "",
                curatorFullName: "",
                studentCount: 0,
                enrollmentDate: ""
            })
        }
    },
    state: {
        accordionGroupList: [],
    },
    getters: {
        accordionGroupList(state) {
            return state.accordionGroupList
        },
    }
}