export default {
    actions: {},
    mutations: {
        updatePathToDocx(state, newPathToDocx) {
            state.pathToDocx = newPathToDocx
        },
    },
    state: {
        pathToDocx: "",
        actionDefault: "open"
    },
    getters: {
        pathToDocx(state) {
            return state.pathToDocx
        },
    }
}