export default {
    actions: {
        async fetchCourseExerciseList(ctx) {
            let courseExerciseList = [
                {
                    tabId: 1,
                    tabHeader: "История",
                    displayMode: "advanced",
                    courseExercises: [
                        {
                            id: 1,
                            exerciseName: "Задание 1",
                            date: "2024-5-01",
                            currentGrades: 0,
                            currentAttempt: 0,
                            maxAttempt: 2,
                            type: "exercise",
                            exerciseMain: [
                                {
                                    type: "text",
                                    name: "Проверочный текст для проверки",
                                    value: null
                                },
                                {
                                    type: "file",
                                    name: "Проверочный файл для скачивания 1",
                                    value: "/files/docx/2.docx"
                                },
                                {
                                    type: "list",
                                    name: "Тестовый список",
                                    value: [
                                        {
                                            type: "text",
                                            name: "Элемент списка",
                                            value: null
                                        },
                                        {
                                            type: "link",
                                            name: "Элемент списка, ввиде ссылки",
                                            value: "http://despedcolledge.ru/login/index.php"
                                        },
                                        {
                                            type: "list",
                                            name: "Вложенный новый список",
                                            value: [
                                                {
                                                    type: "text",
                                                    name: "Вложенный элемент списка",
                                                    value: null
                                                },
                                                {
                                                    type: "file",
                                                    name: "Вложенный файл списка",
                                                    value: "/files/docx/1.docx"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: "test",
                                    name: "Пройти тест",
                                    value: "test-1"
                                },
                            ]
                        },
                        {
                            id: 2,
                            exerciseName: "Задание 2",
                            date: "2024-05-15",
                            maxGrades: 5,
                            currentGrades: 3,
                            type: "exercise",
                            exerciseMain: [
                                {
                                    type: "text",
                                    name: "Проверочный текст для проверки",
                                    value: null
                                },
                            ]
                        },
                        {
                            id: 3,
                            exerciseName: "Задание 3",
                            date: "2024-05-10",
                            maxGrades: null,
                            currentGrades: null,
                            type: "exercise"
                        }
                    ]
                },
                {
                    tabId: 2,
                    tabHeader: "Математика",
                    displayMode: "advanced",
                    courseExercises: [
                        {
                            id: 4,
                            exerciseName: "Умножение",
                            date: null,
                            maxGrades: null,
                            currentGrades: null,
                            type: "exercise"
                        }
                    ]
                },
                {
                    tabId: 3,
                    tabHeader: "Русский язык",
                    displayMode: "advanced",
                    courseExercises: [
                        {
                            id: 5,
                            exerciseName: "Задание 1",
                            date: "2024-01-10",
                            maxGrades: 5,
                            currentGrades: 0,
                            type: "test"
                        }
                    ]
                },
                {
                    tabId: 4,
                    tabHeader: "Математика",
                    displayMode: "simplified",
                    courseExercises: [
                        {
                            id: 6,
                            exerciseName: "Задание 1",
                            date: "2024-01-10",
                            maxGrades: 5,
                            currentGrades: 4,
                            type: null
                        },
                        {
                            id: 7,
                            exerciseName: "Задание 2",
                            date: "2024-04-20",
                            maxGrades: 5,
                            currentGrades: 2,
                            type: null
                        },
                        {
                            id: 8,
                            exerciseName: "Задание 3",
                            date: "2024-04-30",
                            maxGrades: 5,
                            currentGrades: 5,
                            type: null
                        }
                    ]
                },
            ]
            ctx.commit("updateCourseExerciseList", courseExerciseList)
        }
    }, 
    mutations: {
        updateCourseExerciseList(state, courseExerciseList) {
            state.courseExerciseList = courseExerciseList
        }
    },
    state: {
        courseExerciseList: [],
    },
    getters: {
        courseExerciseList(state) {
            return state.courseExerciseList
        },
    }
}