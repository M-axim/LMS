export default {
    actions: {
        async fetchScheduleCabinetList(ctx) {
            let scheduleCabinet = [
                {
                    value: "303",
                },
                {
                    value: "304",
                },
                {
                    value: "Спорт-зал",
                },
                {
                    value: "219",
                },
                {
                    value: "308",
                },
                {
                    value: "145",
                },
            ]
            ctx.commit("updateScheduleCabinet", scheduleCabinet)
        }
    }, 
    mutations: {
        updateScheduleCabinet(state, scheduleCabinet) {
            state.scheduleCabinet = scheduleCabinet
        },
    },
    state: {
        scheduleCabinet: [],
    },
    getters: {
        scheduleCabinet(state) {
            return state.scheduleCabinet
        },
    }
}