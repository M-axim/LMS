export default {
    actions: {
        async fetchUser(ctx) {
            let user
            if (localStorage.getItem("user") && localStorage.getItem("user").length !== 0) {
                user = JSON.parse(localStorage.getItem("user"))
            }
            else {
                user = {
                    id: 0,
                    name: "user",
                    role: "user",
                }
                localStorage.setItem("user", JSON.stringify(user))
            }

            ctx.commit("updateUser", user)
        }
    }, 
    mutations: {
        updateUser(state, user) {
            state.user = user
            localStorage.setItem('user', JSON.stringify(state.user))
        },
        updateRole(state, role) {
            state.user.role = role
            localStorage.setItem('user', JSON.stringify(state.user))
        }
    },
    state: {
        user: {},
    },
    getters: {
        user(state) {
            return state.user
        },
    }
}