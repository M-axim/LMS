import Vuex from "vuex"
import accordionItem from "./modules/accordionItem"
import user from "./modules/user"
import calendar from "./modules/calendar"
import LMSCourseExerciseList from "./modules/LMSCourseExerciseList"
import teacher from "./modules/teacher"
import student from "./modules/student"
import docx from "./modules/docx"
import course from "./modules/course"


const store = new Vuex.Store({
    modules: {
        accordionItem,
        teacher,
        student,
        user,
        calendar,
        LMSCourseExerciseList,
        docx,
        course
    }
})

export default store