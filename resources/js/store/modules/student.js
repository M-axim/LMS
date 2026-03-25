export default {
    actions: {
        async fetchStudentList(ctx) {
            let student = []


            if (localStorage.getItem("student") && JSON.parse(localStorage.getItem("student")).length !== 0)
                student = JSON.parse(localStorage.getItem("student")) 
            else {
                student = [
                    {
                        id: 1,
                        fullname: "Новиков Дмитрий Матвеевич",
                        tel: "+7(915) 121-23-33",
                        login: "student_1",
                        password: "student_1",
                        role: "student",
                        class: 1,
                        courseList: {
                            id: 1,
                            categoryName: "Класс 1",
                            courseName: "Задание по школьным предметам",
                            progress: 0,
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
                    },
                    {
                        id: 2,
                        fullname: "Корнилов Ярослав Александрович",
                        tel: "+7(915) 451-63-13",
                        login: "student_2",
                        password: "student_2",
                        role: "student",
                        class: 1,
                        courseList: {
                            id: 1,
                            categoryName: "Класс 1",
                            courseName: "Задание по школьным предметам",
                            progress: 0,
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
                    },
                    
                ]
                localStorage.setItem('student', JSON.stringify(student));
            }
            ctx.commit("updateStudent", student)
        },
        async fetchActiveTab(ctx) {
            let activeTabId = null

            if (localStorage.getItem("activeTabId"))
                activeTabId = JSON.parse(localStorage.getItem("activeTabId"))

            ctx.commit("setActiveTabId", activeTabId)
        }
    }, 
    mutations: {
        updateStudent(state, student) {
            state.student = student
        },
        setActiveTabId(state, newActiveTabId) {
            state.activeTabId = newActiveTabId
            localStorage.setItem('activeTabId', JSON.stringify(state.activeTabId));
        },
        deleteExercise(state, {courseId, tabId, exerciseId}) {
            state.student.map( (e) => {
                if (e.courseList.id == courseId) {
                    e.courseList.courseExerciseList.map( (exer) => {
                        if (exer.tabId == tabId) {
                            exer.courseExercises = exer.courseExercises.filter( elem => elem.id !== exerciseId)
                        }
                    })

                }
            })
            
            this.commit("updateLocalStorage", state)
        },
        updateTab(state, {courseId, tabObject}) {
            state.student.map( (e) => {
                if (e.courseList.id == courseId) {
                    e.courseList.courseExerciseList.map( (exer) => {
                        if (exer.tabId == tabObject.tabId) {
                            if (exer.displayMode == tabObject.displayMode) {
                                exer.tabHeader = tabObject.tabHeader
                                exer.displayMode = tabObject.displayMode
                            } else 
                                exer = tabObject
                        }
                    })

                }
            })
            this.commit("updateLocalStorage", state)
        },
        deleteTab(state, {courseId, tabId}) {

            state.student.map( (e) => {
                if (e.courseList.id == courseId) {
                    e.courseList.courseExerciseList = e.courseList.courseExerciseList.filter((exer) => exer.tabId !== tabId)
                }
            })

            this.commit("updateLocalStorage", state)
        },
        newExercise(state, {courseId, tab, exerciseObject}) {
            let sum = 0 
            state.student.map( (e) => {
                if (e.courseList.id == courseId) {
                    e.courseList.courseExerciseList.map( (exer) => {
                        if (exer.tabId == tab ) {
                                sum += exer.courseExercises.length
                        }
                    })
                }
            })

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

            state.student.map( (e) => {
                if (e.courseList.id == courseId) {
                    e.courseList.courseExerciseList.map( (exer) => {
                        if (exer.tabId == tab) {
                            exer.courseExercises.push(tmpExercise)
                        }
                    })

                }
            })

            this.commit("updateLocalStorage", state)
        },
        updateExercise(state, {courseId, tab, exerciseObject}) {
            let tmpCourseId = state.student.findIndex( (e) => e.id == courseId)

            state.student.map( (e) => {
                if (e.courseList.id == courseId) {
                    e.courseList.courseExerciseList.map( (exer) => {
                        if (exer.tabId == tab) {
                            exer.courseExercises.map( (ex) => {
                                if (ex.id == exerciseObject.id) {
                                    console.log("hello");
                                    ex.exerciseName = exerciseObject.exerciseName
                                    ex.dateEnd = exerciseObject.dateEnd
                                    ex.maxAttempt = exerciseObject.maxAttempt
                                    ex.type = exerciseObject.type
                                    ex.exerciseContent = exerciseObject.exerciseContent
                                }
                            })
                        }
                    })

                }
            })

            // let tmpTabId = state.student[tmpCourseId].courseExerciseList.findIndex( (e) => e.tabId == tab)
            // let exerciseId = state.student[tmpCourseId].courseExerciseList[tmpTabId].courseExercises.findIndex( (elem) => elem.id == exerciseObject.id) 
            // // state.student[tmpCourseId].courseExerciseList[tmpTabId].courseExercises.push(tmpExercise)
            
            // let tmpExercise = state.student[tmpCourseId].courseExerciseList[tmpTabId].courseExercises[exerciseId]

            // tmpExercise.exerciseName = exerciseObject.exerciseName
            // tmpExercise.dateEnd = exerciseObject.dateEnd
            // tmpExercise.maxAttempt = exerciseObject.maxAttempt
            // tmpExercise.type = exerciseObject.type
            // tmpExercise.exerciseContent = exerciseObject.exerciseContent

            // state.student[tmpCourseId].courseExerciseList[tmpTabId].courseExercises[exerciseId] = tmpExercise
            this.commit("updateLocalStorage", state)
        },
        updateClass(state, object) {
            console.log(object);
            state.student.map( (e) => {
                object.map( (obj) => {
                    if (obj.id == e.courseList.class) {
                        e.courseList.categoryName = obj.categoryName
                        e.courseList.courseName = obj.courseName
                    }
                })
            })
        },
        newStudent(state, student) {
            let tmpstudent = {
                id: state.student.length + 1,
                fullname: student.fullname,
                tel: student.tel,
                login: student.login,
                password: student.password,
                role: student.role,
                class: student.class,
                courseList: student.courseList
            }
            state.student.push(tmpstudent)
            this.commit("updateLocalStorage", state)
        },
        setStudentExerciseResponse(state, data) {

            let studentId = state.student.findIndex( (e) => e.id == data.studentId)
            let tabId = state.student[studentId].courseList.courseExerciseList.findIndex( (e) => e.tabId == state.activeTabId)
            let exerciseId = state.student[studentId].courseList.courseExerciseList[tabId].courseExercises.findIndex( (e) => e.id == data.exerciseId)
            state.student[studentId].courseList.courseExerciseList[tabId].courseExercises[exerciseId].exerciseResponse = data.exerciseResponse
            state.student[studentId].courseList.courseExerciseList[tabId].courseExercises[exerciseId].currentAttempt += 1

            this.commit("updateLocalStorage", state)
        },
        studentIncremetCurrentAttempts(state, {courseId, exerciseId}) {
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
        getStudentItem(state, studentId) {
            state.studentItem = state.student.find( (e) => e.id == studentId)
            console.log(state.studentItem);
        },
        getStudentExercise(state, data) {
            let studentId = state.student.findIndex( (e) => e.id == data.student_id)
            let tabId = state.student[studentId].courseList.courseExerciseList.findIndex( (e) => e.tabId == data.tab_id)
            let exerciseId = state.student[studentId].courseList.courseExerciseList[tabId].courseExercises.findIndex( (e) => e.id == data.exercise_id)

            state.studentExercise = state.student[studentId].courseList.courseExerciseList[tabId].courseExercises[exerciseId]
            state.studentExercise.tabId = tabId
            state.studentExercise.studentId = studentId
            state.studentExercise.exerciseId = exerciseId
        },
        updateLocalStorage(state) {
            localStorage.setItem('student', JSON.stringify(state.student));
        },
        setQuizzStatus(state, {courseId, exerciseId, exerciseStatus}) {

        },
        setExerciseStatus(state, data) {
            state.student[data.student_id].courseList.courseExerciseList[data.tab_id].courseExercises[data.exercise_id].currentGrades = data.currentGrades
            state.student[data.student_id].courseList.courseExerciseList[data.tab_id].courseExercises[data.exercise_id].statusExercise = 2
            state.student[data.student_id].courseList.courseExerciseList[data.tab_id].courseExercises[data.exercise_id].currentAttempt += 1
            this.commit("updateLocalStorage", state)
        },
        updateStudentList(state, student) {
            let findId = state.student.findIndex( (e) => e.id == student.id)
            // let tmpCourseList = state.student[findId].courseList
            // state.student[findId] = student
            state.student[findId] = student
            this.commit("updateLocalStorage", state)
        },
        resetStudentItem(state) {
            state.studentItem = null
        },
        deleteStudentItem(state, studentId) {
            state.student = state.student.filter( (e) => e.id != studentId)
            this.commit("updateLocalStorage", state)
        }
    },
    state: {
        student: [],
        studentExercise: null,
        studentItem: null,
        activeTabId: null,
    },
    getters: {
        student(state) {
            return state.student
        },
        studentItem(state) {
            return state.studentItem
        },
        activeTabId(state) {
            return state.activeTabId
        },
        studentExercise(state) {
            return state.studentExercise
        },
    }
}