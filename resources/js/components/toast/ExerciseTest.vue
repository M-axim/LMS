<template lang="pug">
#exerciseTestModal.modal.fade(tabindex='-1' aria-labelledby='exerciseTestModalLabel' aria-hidden='true')
    .modal-dialog
        .modal-content
            .modal-header
                h1#exerciseTestModalLabel.modal-title.fs-5 Вопрос {{ this.currentQuestion + 1 }} / {{ this.questions.length }}
            .modal-body
                .exercise-question.text-center.border.p-4.rounded
                    p.m-0 {{ questions[this.currentQuestion]?.question }}
                    .exercise-img.mt-2
                        img.w-100(:src="questions[this.currentQuestion]?.imgSrc")
                fieldset.exercise-response.mt-3.text-center.border.p-4.rounded
                    legend.float-none.w-auto.fs-6 {{ getHint(questions[this.currentQuestion]?.typeResponse) }}

                    .exercise-select.row.g-3.d-flex(v-if="questions[this.currentQuestion]?.typeResponse === 'select' || questions[this.currentQuestion]?.typeResponse === 'multiselect'")
                        .col-12.col-sm-6(v-for="(elem, index) in questions[this.currentQuestion]?.options" :key="this.currentQuestion")
                            input.btn-check(type="radio" name="options" autocomplete="off" @click="answer = elem" :id="`test-${index}`")
                            label.btn.btn-outline-primary.w-100(:for="`test-${index}`") {{ elem.length == 0 ? "&shy;" : elem }}

                    .exercise-input.row(v-else-if="questions[this.currentQuestion]?.typeResponse === 'input'")
                        .col-12
                            v-inputLine(:label="``")

                    .exercise-match.row(v-else-if="questions[this.currentQuestion]?.typeResponse === 'match'")
                        .col-12
                            .match-select.input-group.mt-2(v-for="(elem, index) in questions[this.currentQuestion]?.options" :key="index")
                                input.form-control(type="text" disabled :value="elem")
                                select.form-select
                                    option(selected) Выберите значение
                                    option(v-for="(elem, index) in questions[this.currentQuestion]?.correctOption" :value="index") {{ elem }}

                                //- input.btn-check(type="checkbox" name="options" autocomplete="off" :id="`test-${index}`")
                                //- label.btn.btn-outline-primary.w-100(:for="`test-${index}`") {{ elem }}

            .modal-footer(v-if="this.currentQuestion < this.questions.length - 1")
                button.btn.btn-primary(type='button' data-bs-dismiss="modal") Выйти
                button.btn.btn-primary(type='button' @click="increment(), checkAnswer(this.currentQuestion)") Дальше
            .modal-footer(v-else)
                button.btn.btn-primary(type='button' data-bs-dismiss="modal") Выйти
                button.btn.btn-primary(type='button' data-bs-dismiss="modal" @click="checkAnswer(this.currentQuestion), endQuizz()") Завершить

</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    data() {
        return {
            questions: [
                {
                    question: "Сколько будет 2 + 2?",
                    typeResponse: "select",
                    imgSrc: "",
                    options: ["4", "6", "7", "1"],
                    correctOption: ["4"]
                },
                {
                    question: "Сколько будет 2 + 2 * 2?",
                    typeResponse: "select",
                    imgSrc: "",
                    options: ["8", "6", "4", "1"],
                    correctOption: ["6"]
                },
                {
                    question: "Чему равно уравнение x^2 = 4",
                    typeResponse: "select",
                    imgSrc: "",
                    options: ["2", "-2", "0", "4"],
                    correctOption: ["-2", "2"]
                },
                {
                    question: "Продолжить знаменитую пословицу: 'Без труда не выловишь...'",
                    typeResponse: "input",
                    imgSrc: "",
                    options: null,
                    correctOption: ["рыбку из пруда", "и рыбку из пруда"]
                },
                {
                    question: "Какая функция показана на фотографии?'",
                    typeResponse: "select",
                    imgSrc: "https://media.geeksforgeeks.org/wp-content/uploads/20210413183405/infunc.jpg",
                    options: ["Возрастающая", "Убывающая"],
                    correctOption: ["Возрастающая"]
                },
                {
                    question: "Соотнесите правильные вопросы с правильными ответами",
                    typeResponse: "match",
                    imgSrc: "",
                    options: ["2 + 2 =", "8 / 4 = ", "10 - 5 = ", "9 * 2 = "],
                    correctOption: ["4", "2", "5", "18"]
                },
            ],
            currentQuestion: 0,
            response: [],
            answer: "",
            correctAnswer: 0
        }
    },
    computed: {
        ...mapGetters(["exerciseObject", "user", "student", "activeTabId"])
    },
    methods: {
        ...mapMutations(["setExerciseStatus"]),
        ...mapActions(["fetchStudentList"]),
        decrement() {
            this.currentQuestion -= this.currentQuestion === 0 ? 0 : 1
        },
        checkAnswer(id) {
            let question = this.questions.find((e) => e.id == id)

            if (this.answer == question.correctOption)
                this.correctAnswer = this.correctAnswer + 1

            console.log("Оценка " + this.correctAnswer);
        },
        increment() {
            this.currentQuestion += this.currentQuestion === this.questions.length - 1 ? 0 : 1
        },
        endQuizz() {
            let currentGrades = 100 / (this.questions.length / this.correctAnswer)

            let studentId = this.student.findIndex( (e) => e.id == this.user.id)
            console.log(this.activeTabId);
            let tabId = this.student[studentId].courseList.courseExerciseList.findIndex( (e) => e.tabId == this.activeTabId)
            let exerciseId = this.student[studentId].courseList.courseExerciseList[tabId].courseExercises.findIndex( (e) => e.id == this.exerciseObject.id)

            if (this.user.role == "student") {
                this.setExerciseStatus({
                    student_id: studentId,
                    tab_id: tabId,
                    exercise_id: exerciseId,
                    currentGrades: currentGrades})
            }
            
        },
        getHint(typeQuestion) {
            switch(typeQuestion) {
                case "select":
                    return "Выберите ответ"
                    break;
                case "input":
                    return "Введите ответ"
                    break;
                case "match":
                    return "сопоставьте вопросы с ответами"
                    break;
            }
        }
    },
    async mounted() {
        await this.fetchStudentList()
    },
    watch: {
        exerciseObject: function () {
            if (this.exerciseObject !== null) {
                this.questions = this.exerciseObject.exerciseContent
            }
        },
    }
}
</script>

<style lang="scss" scoped>

</style>