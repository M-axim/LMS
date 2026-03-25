export default {
    actions: {
        async fetchAcademicPerformanceList(ctx) {

            let academicPerformanceList = []
            let academicPerformanceLength = 8

            let academicPerformanceArray = [
                [
                    {
                        name: "K-121412 Информатика",
                        studyLoad: 81,
                        rating: 4
                    },
                    {
                        name: "K-121412 Информатика",
                        studyLoad: 81,
                        rating: 4
                    },
                    {
                        name: "K-121412 Информатика",
                        studyLoad: 81,
                        rating: 4
                    }
                ],
                [
                    {
                        name: "K-121412 Информатика",
                        studyLoad: 81,
                        rating: 5
                    },
                    {
                        name: "K-121412 Информатика",
                        studyLoad: 81,
                        rating: 5
                    },
                    {
                        name: "K-121412 Информатика",
                        studyLoad: 81,
                        rating: 5
                    }
                ]
            ]

            for (let i = 1; i <= academicPerformanceLength; i++) {
                academicPerformanceList.push({
                        tabId: `course-${i}`,
                        selected: i === 1 ? true : false,
                        text: `Семестр ${i}`,
                        subjects: academicPerformanceArray[i - 1]
                    })
            }
            
            ctx.commit("updateAcademicPerformanceLength", academicPerformanceLength)
            ctx.commit("updateAcademicPerformanceList", academicPerformanceList)
        }
    }, 
    mutations: {
        updateAcademicPerformanceList(state, academicPerformanceList) {
            state.academicPerformanceList = academicPerformanceList
        },
        updateAcademicPerformanceLength(state, academicPerformanceLength) {
            state.academicPerformanceLength = academicPerformanceLength
        },
        newAcademicLeaveItem(state) {
            state.academicPerformanceList.push(
            {
                DecreeValue: "",
                DecreeDate: "",
                DecreeDateTo: "",
                DecreeDateBy: ""
            })
        }
    },
    state: {
        academicPerformanceList: [],
        academicPerformanceLength: 1
    },
    getters: {
        academicPerformanceList(state) {
            return state.academicPerformanceList
        },
    }
}