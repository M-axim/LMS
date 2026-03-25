export default {
    actions: {
        async fetchPersonalInfo(ctx) {
            let personalInfo = [
                [{
                    id: 1,
                    labelId: "personalFullname",
                    labelName: "ФИО студента",
                    inputType: "text",
                    inputValue: "Боев Максим Михайлович"
                },
                {
                    id: 2,
                    labelId: "PersonalSpeciality",
                    labelName: "Специальность",
                    inputType: "text",
                    inputValue: "09.02.07 Информационные системы и программирование"
                },
                {
                    id: 3,
                    labelId: "PersonalGender",
                    labelName: "Пол",
                    inputType: "text",
                    inputValue: "Мужской"
                },
                {
                    id: 4,
                    labelId: "PersonalBirthDay",
                    labelName: "Дата рождения",
                    inputType: "date",
                    inputValue: "2004-07-28"
                },
                {
                    id: 5,
                    labelId: "PersonalBirthplace",
                    labelName: "Место рождения",
                    inputType: "text",
                    inputValue: "Старый Оскол"
                }],
                [{
                    id: 6,
                    labelId: "PersonalAddress",
                    labelName: "Адрес регистрации",
                    inputType: "text",
                    inputValue: "Старооскольский р-он, село Котово, ул.Сосновая, д.112"
                },
                {
                    id: 7,
                    labelId: "PersonalEducation",
                    labelName: "Образование",
                    inputType: "text",
                    inputValue: "Основное общее 9 классов"
                },
                {
                    id: 8,
                    labelId: "PersonalSchoolInfo",
                    labelName: "Школа",
                    inputType: "text",
                    inputValue: "МБОУ \"Основная общеобразовательная Котовская школа\" с. Котово Старооскольского р-на"
                },
                {
                    id: 9,
                    labelId: "PersonalSchoolEnd",
                    labelName: "Год окончания",
                    inputType: "number",
                    inputValue: 2004
                },
                {
                    id: 10,
                    labelId: "PersonalCurrentGroup",
                    labelName: "Текущая группа",
                    inputType: "text",
                    inputValue: "31-и"
                }],
            ]
            ctx.commit("updatePersonalInfo", personalInfo)
        }
    }, 
    mutations: {
        updatePersonalInfo(state, personalInfo) {
            state.personalInfo = personalInfo
        }
    },
    state: {
        personalInfo: [],
    },
    getters: {
        personalInfo(state) {
            return state.personalInfo
        },
    }
}