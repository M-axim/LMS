export default {
    actions: {
        async fetchStudentItems(ctx, page = 0) {
            let studentItems = []

            console.log(page)

            let studentItemsList = [
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
                {
                    studentFullname: "Боев Максим Михайлович",
                    curator: "Наталья Александровна",
                    birthday: "2022-07-28",
                    groupName: "31-И",
                    status: "Учится"
                },
            ]

            let studentsLength = studentItemsList.length
            console.log(studentsLength)
            let stapeCount = 0
            let pageItemCount = ctx.getters.pageItemCount
            let nextStapeCount = (pageItemCount * page) + pageItemCount

            if (studentsLength > (page * pageItemCount) && studentsLength > nextStapeCount)
                stapeCount = nextStapeCount
            else
                stapeCount = studentsLength

            for (let i = (pageItemCount * page); i < stapeCount; i++) {
                studentItems.push(studentItemsList[i])
            }

            console.log(studentItems)

            ctx.commit("updateStudentItems", studentItems)
            ctx.commit("updateStudentItemsLength", studentsLength)
            ctx.commit("updatePageCount", Math.ceil(studentsLength / pageItemCount))
        }
    }, 
    mutations: {
        updateStudentItems(state, studentItems) {
            state.studentItems = studentItems
        },
        updateStudentItemsLength(state, studentsLength) {
            state.studentsLength = studentsLength
        },
        updatePageCount(state, pageCount) {
            state.pageCount = pageCount
        }
    },
    state: {
        studentItems: [],
        studentsLength: 0,
        pageItemCount: 10,
        pageCount: 0
    },
    getters: {
        studentItems(state) {
            return state.studentItems
        },
        studentsLength(state) {
            return state.studentsLength
        },
        pageItemCount(state) {
            return state.pageItemCount
        },
        pageCount(state) {
            return state.pageCount
        },
    }
}