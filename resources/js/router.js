import {createRouter, createWebHistory} from 'vue-router'
import store from "./store/store"
import { sync } from 'vuex-router-sync'


import Index from './views/Index'
import Course from './views/Course'
import CourseExercise from './views/CourseExercise'
import Teacher from './views/Teacher'
import Student from './views/Student'
import Login from './views/Login'
import Grades from './views/Grades'
import HomeWork from './views/HomeWork'

let routes = [
    {
        name: "Home",
        path: "/",
        component: Index,
    },
    {
        name: "HomeWork",
        path: "/homeWork",
        component: HomeWork,
    },
    {
        name: "Grades",
        path: "/grades",
        component: Grades,
    },
    {
        name: "Login",
        path: "/login",
        component: Login,
    },
    {
        name: "Teacher",
        path: "/teacher",
        component: Teacher,
    },
    {
        name: "Student",
        path: "/student",
        component: Student,
    },
    {
        name: "Course",
        path: "/course/:course_id",
        component: Course,
    },
    {
        name: "Exercise",
        path: "/course/:course_id/exercise/:exercise_id",
        component: CourseExercise,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

sync(store, router)

export default router