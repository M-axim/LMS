import moment from 'moment';

moment.updateLocale('en', {
        week: {
            dow : 1, // Monday is the first day of the week.
        }
    });

export default {
    actions: {
    }, 
    mutations: {
        currentDate(state, currentDate) {
            state.currentDate = currentDate
        },
        fillDays(state, lastDay) {
            for (let i = 1; i <= lastDay; i++)
            {
                state.monthDays.push({
                    value: i,
                    current: moment(state.currentDate).format("DD") === i,
                    event: i % 5 === 0
                })
            }
        },
        fillEmpty(state, countIter) {
            for (let i = 0; i < countIter; i++)
            {
                state.monthDays.push({
                    value: "",
                    current: false,
                    event: false
                })
            }
        },
        changeDay(state, operations) {
            switch (operations) {
                case "increase":
                    state.currentDate = moment(state.currentDate).add(1, 'months')
                    break;
                case "decrease":
                    state.currentDate = moment(state.currentDate).subtract(1, 'months')
                    break;
            }
            this.commit("getCalendarDays")
        },
        clearMonthDays(state) {
            state.monthDays = []
        },
        getCalendarDays(state) {
            this.commit("updateGetYear")
            this.commit("updateCurrentMonth")

            let firstDay = moment(state.currentDate).startOf('month').week(1).format('d');
            let lastDay = moment(state.currentDate).endOf('month').format('DD');

            this.commit("clearMonthDays")
            this.commit("fillEmpty", firstDay - 1)
            this.commit("fillDays", lastDay)

            state.countCalendarItem = state.monthDays.length > state.countCalendarItem ? state.countCalendarItem + 7 : 35
            this.commit("fillEmpty", (state.countCalendarItem - state.monthDays.length))
            state.countWeek = Math.ceil(state.monthDays.length / 7)
            
        },
        updateGetYear(state) {
            state.currentYear = moment(state.currentDate).format("YYYY")
        },
        updateCurrentMonth(state) {
            state.currentMonth = moment(state.currentDate).format("M") - 1
        },
    },
    state: {
        weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        yearMonths: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthDays: [],
        countWeek: 1,
        countCalendarItem: 35,
        currentDate: moment(),
        currentYear: 1990,
        currentMonth: 0
    },
    getters: {
        weekdays(state) {
            return state.weekdays
        },
        countWeek(state) {
            return state.countWeek
        },
        monthDays(state) {
            return state.monthDays
        },
        currentDate(state) {
            return state.currentDate
        },
        yearMonths(state) {
            return state.yearMonths
        },
        currentMonth(state) {
            return state.currentMonth
        },
        currentYear(state) {
            return state.currentYear
        }
    }
}