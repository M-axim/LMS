export default {
    actions: {
        async fetchTabList(ctx) {

            let tabList = [
                {
                    tabId: "finalGrades",
                    selected: true,
                    text: "Итоговые оценки по всем предметам",
                },
                {
                    tabId: "GradeCourseSubject",
                    selected: false,
                    text: "Результаты курсового проекта",
                },
                {
                    tabId: "GradeFinalCertificate",
                    selected: false,
                    text: "Результаты итоговой аттестации",
                }
            ]
    
            ctx.commit("updateTabList", tabList)
        },
        async fetchAllSubject(ctx) {
            let subjectList = [
                {
                    name: "K-121 Численные методы",
                    studyLoad: 79,
                    rating: 4
                },
                {
                    name: "K-122 Русский",
                    studyLoad: 39,
                    rating: 4
                },
                {
                    name: "K-123 Информатика",
                    studyLoad: 81,
                    rating: 4
                },
                {
                    name: "K-124 Иностранный язык в профессиональной деятельности",
                    studyLoad: 57,
                    rating: 5
                },
                {
                    name: "K-125 Физическая культура",
                    studyLoad: 24,
                    rating: 0
                },
                {
                    name: "K-126 Теория вероятностей и математическая статистика",
                    studyLoad: 52,
                    rating: 5
                }
            ]
            
            ctx.commit("updateSubjectList", subjectList)
        }
    }, 
    mutations: {
        updateTabList(state, tabList) {
            state.tabList = tabList
        },
        updateSubjectList(state, subjectList) {
            state.subjectList = subjectList
        }
    },
    state: {
        tabList: [],
        subjectList: [],
        tabListLength: 2,
    },
    getters: {
        tabList(state) {
            return state.tabList
        },
        subjectList(state) {
            return state.subjectList
        },
    }
}