export default {
    actions: {
        async fetchAccordionItems(ctx) {

            let accordionItems = [
                {
                    subjectCode: "09.02.07",
                    subjectName: "Информатика",
                    studentCount: "96",
                    departmentNumber: "1",
                },
                {
                    subjectCode: "09.02.07",
                    subjectName: "Преподавание в начальных классах",
                    studentCount: "50",
                    departmentNumber: "2",
                },
                {
                    subjectCode: "09.02.07",
                    subjectName: "Хореография",
                    studentCount: "50",
                    departmentNumber: "3",
                },
                {
                    subjectCode: "09.02.07",
                    subjectName: "Дизайн",
                    studentCount: "63",
                    departmentNumber: "4",
                }
            ]
            
            ctx.commit("updateAccordionItems", accordionItems)
        }
    }, 
    mutations: {
        updateAccordionItems(state, accordionItems) {
            state.accordionItems = accordionItems
        },
        newAccordionItems(state) {
            state.accordionItems.push(
            {
                subjectCode: "",
                subjectName: "",
                studentCount: "0",
                departmentNumber: "0",
            })
        }
    },
    state: {
        accordionItems: [],
    },
    getters: {
        accordionItems(state) {
            return state.accordionItems
        },
    }
}