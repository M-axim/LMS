export default {
    state: {
        courseList: [],
        courseObject: {},
        tabObject: {},
        exerciseObject: {},
        tabList: [],
        tabCourse: [],
        displayModeList: [],
        typeList: [],
        exerciseStatusList: [],
        gradeList: [],
        dateEndList: []
    },
    actions: {
        async fetchCourseList(ctx) {
            let courseList = []

            if (localStorage.getItem("courseList") && JSON.parse(localStorage.getItem("courseList")).length !== 0) {
                courseList = JSON.parse(localStorage.getItem("courseList"))
            } else {
                courseList = [
                    {
                        id: 1,
                        categoryName: "Класс 1",
                        courseName: "Задание по школьным предметам",
                        progress: 20,
                        courseExerciseList: [
                            {
                                tabId: 1,
                                tabHeader: "Русский язык",
                                displayMode: "1",
                                courseExercises: [
                                    {
                                        id: 1,
                                        exerciseName: "Задание 1",
                                        date: "2024-05-01",
                                        dateEnd: "2024-05-11",
                                        statusExercise: 0,
                                        currentGrades: 0,
                                        currentAttempt: 1,
                                        maxAttempt: 2,
                                        type: 0,
                                        exerciseContent: {
                                            "ops": [
                                                {
                                                    "insert": "Это первое занятие по предмету \"Русский язык\", в этом модуле вы изучите:\nПравила правописания в русском языке;"
                                                },
                                                {
                                                    "attributes": {
                                                        "list": "bullet"
                                                    },
                                                    "insert": "\n"
                                                },
                                                {
                                                    "insert": "Изучите фонетику слов;"
                                                },
                                                {
                                                    "attributes": {
                                                        "list": "bullet"
                                                    },
                                                    "insert": "\n"
                                                },
                                                {
                                                    "insert": "Изучите "
                                                },
                                                {
                                                    "attributes": {
                                                        "background": "#ffffff",
                                                        "color": "#333333"
                                                    },
                                                    "insert": "первоначальные сведения об основных понятиях синтаксиса и пунктуации"
                                                },
                                                {
                                                    "attributes": {
                                                        "list": "bullet"
                                                    },
                                                    "insert": "\n"
                                                }
                                            ]
                                        },
                                        exerciseResponse: {}
                                    },
                                ]
                            },
                            {
                                tabId: 2,
                                tabHeader: "Русский язык",
                                displayMode: "2",
                                courseExercises: [
                                    {
                                        id: 1,
                                        exerciseName: "Задание 1",
                                        date: "2024-05-01",
                                        dateEnd: "2024-05-11",
                                        statusExercise: 0,
                                        currentGrades: 0,
                                        currentAttempt: 1,
                                        maxAttempt: 2,
                                        type: 0,
                                        exerciseContent: [
                                            {
                                                id: 1,
                                                question: "Сколько гласных букв в слове 'ворона'",
                                                typeResponse: "select",
                                                options: ["3", "2", "5", ""],
                                                correctOption: "3"
                                            },
                                            {
                                                id: 2,
                                                question: "Сколько согласных букв в слове 'мышь'",
                                                typeResponse: "select",
                                                options: ["3", "2", "5", ""],
                                                correctOption: "2"
                                            },
                                            {
                                                id: 3,
                                                question: "На какой слог в слове воробей падает ударение?",
                                                typeResponse: "select",
                                                options: ["На первый", "На второй", "На третий", ""],
                                                correctOption: "На третий"
                                            },
                                        ],
                                        exerciseResponse: {}
                                    },
                                ]
                            },
                        ]
                    },
                ]
                localStorage.setItem('courseList', JSON.stringify(courseList));
            }

            ctx.commit("updateCourseList", courseList)
        }
    }, 
    mutations: {
        updateCourseList(state, courseList) {
            state.courseList = courseList
        },
        newCourse(state, course) {
            state.courseList.push({
                id: state.courseList.length + 1,
                categoryName: course.categoryName,
                courseName: course.courseName,
                progress: 0,
                courseExerciseList: []
            })
            this.commit("updateLocalStorage", state)
        },
        newTab(state, {courseId, tabObject}) {
            let course = state.courseList.findIndex( (e) => e.id == courseId)

            let tmpTab = {
                tabId: state.courseList[course].courseExerciseList.length + 1,
                tabHeader: tabObject.tabHeader,
                displayMode: tabObject.displayMode,
                courseExercises: []
            }

            state.courseList[course].courseExerciseList.push(tmpTab)
            this.commit("updateLocalStorage", state)
        },
        updateTab(state, {courseId, tabObject}) {
            let course = state.courseList.findIndex( (e) => e.id == courseId)
            let tab = state.courseList[course].courseExerciseList.findIndex( (e) => e.tabId == tabObject.tabId)

            state.courseList[course].courseExerciseList[tab] = tabObject
            this.commit("updateLocalStorage", state)
        },
        deleteTab(state, {courseId, tabId}) {
            let course = state.courseList.findIndex( (e) => e.id == courseId)
            let tab = state.courseList[course].courseExerciseList.findIndex( (e) => e.tabId == tabId)

            state.courseList[course].courseExerciseList = state.courseList[course].courseExerciseList.filter( (e) => e.tabId != tabId)
            this.commit("updateLocalStorage", state)
        },
        getTabObject(state, {courseId, tabId}) {
            let tmpCourseId = state.courseList.findIndex( (e) => e.id == courseId)
            state.tabObject = state.courseList[tmpCourseId].courseExerciseList.find( (e) => e.tabId == tabId)
        },
        newExercise(state, {courseId, tab, exerciseObject}) {
            let tmpCourseId = state.courseList.findIndex( (e) => e.id == courseId)

            let tmpTabId = state.courseList[tmpCourseId].courseExerciseList.findIndex( (e) => e.tabId == tab)

            let sum = 0 
            state.courseList[tmpCourseId].courseExerciseList.map( (e) => sum += e.courseExercises.length)

            let tmpExercise = {
                id: sum + 1,
                exerciseName: exerciseObject.exerciseName,
                date: new Date().toISOString().split('T')[0],
                dateEnd: exerciseObject.dateEnd,
                currentGrades: 0,
                statusExercise: 0,
                currentAttempt: 1,
                maxAttempt: exerciseObject.maxAttempt,
                type: exerciseObject.type,
                exerciseContent: exerciseObject.exerciseContent,
                exerciseResponse: {}
            }

            state.courseList[tmpCourseId].courseExerciseList[tmpTabId].courseExercises.push(tmpExercise)
            
            this.commit("updateLocalStorage", state)
        },
        setExerciseResponse(state, {courseId, exerciseId, exerciseResponse}) {
            let tmpCourseId = state.courseList.findIndex( (e) => e.id == courseId)
            state.courseList[tmpCourseId].courseExerciseList.map( (course) => {
                course.courseExercises.map( (e) => { 
                    if (e.id == exerciseId) {
                        e.exerciseResponse = exerciseResponse
                    }
                })
            })
            this.commit("updateLocalStorage", state)
        },
        getDateEndList(state, courseId) {
            let tmpCourseId = state.courseList.findIndex( (e) => e.id == courseId)

        },
        
        setTeacherExerciseStatus(state, {courseId, exerciseId, exerciseStatus}) {
            let tmpCourseId = state.courseList.findIndex( (e) => e.id == courseId)
            state.courseList[tmpCourseId].courseExerciseList.map( (course) => {
                course.courseExercises.map( (e) => { 
                    if (e.id == exerciseId) {
                        e.statusExercise = exerciseStatus
                    }
                })
            })
            this.commit("updateLocalStorage", state)
        },
        incremetCurrentAttempts(state, {courseId, exerciseId}) {
            let tmpCourseId = state.courseList.findIndex( (e) => e.id == courseId)
            state.courseList[tmpCourseId].courseExerciseList.map( (course) => {
                course.courseExercises.map( (e) => { 
                    if (e.id == exerciseId) {
                        e.currentAttempt += 1
                    }
                })
            })
            this.commit("updateLocalStorage", state)
        },
        updateExercise(state, {courseId, tab, exerciseObject}) {
            let tmpCourseId = state.courseList.findIndex( (e) => e.id == courseId)

            let tmpTabId = state.courseList[tmpCourseId].courseExerciseList.findIndex( (e) => e.tabId == tab)
            let exerciseId = state.courseList[tmpCourseId].courseExerciseList[tmpTabId].courseExercises.findIndex( (elem) => elem.id == exerciseObject.id) 
            // state.courseList[tmpCourseId].courseExerciseList[tmpTabId].courseExercises.push(tmpExercise)
            
            let tmpExercise = state.courseList[tmpCourseId].courseExerciseList[tmpTabId].courseExercises[exerciseId]

            tmpExercise.exerciseName = exerciseObject.exerciseName
            tmpExercise.dateEnd = exerciseObject.dateEnd
            tmpExercise.maxAttempt = exerciseObject.maxAttempt
            tmpExercise.type = exerciseObject.type
            tmpExercise.exerciseContent = exerciseObject.exerciseContent

            state.courseList[tmpCourseId].courseExerciseList[tmpTabId].courseExercises[exerciseId] = tmpExercise
            this.commit("updateLocalStorage", state)
        },
        deleteExercise(state, {courseId, tabId, exerciseId}) {
            let tmpCourseId = state.courseList.findIndex( (e) => e.id == courseId)
            let tmpTabId = state.courseList[tmpCourseId].courseExerciseList.findIndex( (e) => e.tabId == tabId)
            state.courseList[tmpCourseId].courseExerciseList[tmpTabId].courseExercises = state.courseList[tmpCourseId].courseExerciseList[tmpTabId].courseExercises.filter( (exercise) => exercise.id != exerciseId)
            this.commit("updateLocalStorage", state)
        },
        resetCourseObject(state) {
            state.courseObject = null
        },
        resetExerciseObject(state) {
            state.exerciseObject = null
        },
        editCourse(state, editCourse) {
            let findId = state.courseList.findIndex( (elem, index) => elem.id == editCourse.id )
            state.courseList[findId] = editCourse
            this.commit("updateLocalStorage", state)
        },
        deleteCourse(state, courseId) {
            state.courseList = state.courseList.filter( (e) => e.id !== courseId)
            this.commit("updateLocalStorage", state)
        },
        getCourseObject(state, courseId) {
            state.courseObject = state.courseList.find( (e) => e.id == courseId)
        },
        getCourseExerciseObject(state, {courseId, exerciseId}) {
            let tmpCourseObject = state.courseList.find( (e) => e.id == courseId)
            tmpCourseObject.courseExerciseList.map( (course) => {
                course.courseExercises.map( (e) => { 
                    if (e.id == exerciseId) {
                        state.exerciseObject = e
                        state.exerciseObject.tabId = course.tabId
                    }
                })
            })
        },
        getCourseTab(state) {
            state.tabCourse = state.courseList.map( (e) => ({
                id: e.id,
                text: e.categoryName
            }))
            state.tabCourse.unshift({
                id: 0,
                text: "Не выбрана",
                type: ""
            })
            console.log(state.courseList);
        },
        getTabOptions(state, courseId) {

            if(courseId && Object.keys(state.courseList).length !== 0) {
                let tmpObj = state.courseList.find( (e) => e.id == courseId)
                console.log(state.courseList);
                state.tabList = tmpObj.courseExerciseList.map( (tabs) => ({
                    id: tabs.tabId,
                    text: tabs.displayMode === "1" ? tabs.tabHeader : tabs.tabHeader + " (упрощ.)",
                    type: tabs.displayMode
                }))
                state.tabList.unshift({
                    id: 0,
                    text: "Не выбрана",
                    type: ""
                })
            }
        },
        getTypeOptions(state) {
            state.typeList = [
                {
                    id: 0,
                    text: "Упражнение"
                },
                {
                    id: 2,
                    text: "Тест"
                },
            ]
        },
        getExerciseStatusOptions(state) {
            state.exerciseStatusList = [
                {
                    id: 0,
                    text: "Не отправлено"
                },
                {
                    id: 1,
                    text: "На проверке"
                },
                {
                    id: 2,
                    text: "Проверено"
                }
            ]
        },
        getDisplayModeOptions(state) {
            state.displayModeList = [
                {
                    id: 0,
                    text: "Не выбрано"
                },
                {
                    id: 1,
                    text: "Расширенный"
                },
                {
                    id: 2,
                    text: "Упрощенный"
                }
            ]
        },
        getGradeOptions(state) {
            state.gradeList = [
                {
                    id: 0,
                    text: "Не указано"
                },
                {
                    id: 1,
                    text: "1"
                },
                {
                    id: 2,
                    text: "2"
                },
                {
                    id: 3,
                    text: "3"
                },
                {
                    id: 4,
                    text: "4"
                },
                {
                    id: 5,
                    text: "5"
                }
            ]
        },
        updateLocalStorage(state) {
            localStorage.setItem('courseList', JSON.stringify(state.courseList));
        },
    },
    getters: {
        courseList(state) {
            return state.courseList
        },
        gradeList(state) {
            return state.gradeList
        },
        tabList(state) {
            return state.tabList
        },
        tabCourse(state) {
            return state.tabCourse
        },
        tabObject(state) {
            return state.tabObject
        },
        typeList(state) {
            return state.typeList
        },
        courseObject(state) {
            return state.courseObject
        },
        exerciseObject(state) {
            return state.exerciseObject
        },
        exerciseStatusList(state) {
            return state.exerciseStatusList
        },
        displayModeList(state) {
            return state.displayModeList
        },
    }
}