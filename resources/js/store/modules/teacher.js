export default {
    actions: {
        async fetchTeacherList(ctx) {
            let teacher = []
            if (localStorage.getItem("teacher") && JSON.parse(localStorage.getItem("teacher")).length !== 0)
                teacher = JSON.parse(localStorage.getItem("teacher")) 
            else {
                teacher = [
                    {
                        id: 1,
                        fullname: "Морозова Мария Давидовна",
                        tel: 7915121233,
                        login: "teacher_1",
                        password: "teacher_1",
                        role: "teacher",
                    },
                    {
                        id: 2,
                        fullname: "Устинова Анастасия Степановна",
                        tel: 7915121233,
                        login: "teacher_2",
                        password: "teacher_2",
                        role: "teacher",
                    },
                    
                ]
                localStorage.setItem('teacher', JSON.stringify(teacher));
            }
            ctx.commit("updateTeacher", teacher)
        }
    }, 
    mutations: {
        updateTeacher(state, teacher) {
            state.teacher = teacher
        },
        newTeacher(state, teacher) {
            let tmpteacher = {
                id: state.teacher.length + 1,
                fullname: teacher.fullname,
                tel: teacher.tel,
                login: teacher.login,
                password: teacher.password,
            }
            state.teacher.push(tmpteacher)
            this.commit("updateLocalStorage", state)
        },
        getTeacherItem(state, teacherId) {
            state.teacherItem = state.teacher.find( (e) => e.id == teacherId)
        },
        updateLocalStorage(state) {
            localStorage.setItem('teacher', JSON.stringify(state.teacher));
        },
        updateTeacherList(state, teacher) {
            let findId = state.teacher.findIndex( (e) => e.id == teacher.id)
            state.teacher[findId] = teacher
            this.commit("updateLocalStorage", state)
        },
        resetTeacherItem(state) {
            state.teacherItem = null
        },
        deleteTeacherItem(state, teacherId) {
            state.teacher = state.teacher.filter( (e) => e.id != teacherId)
            this.commit("updateLocalStorage", state)
        }
    },
    state: {
        teacher: [],
        teacherItem: null
    },
    getters: {
        teacher(state) {
            return state.teacher
        },
        teacherItem(state) {
            return state.teacherItem
        },
    }
}