export default {
    actions: {
        async fetchVideo(ctx, filter = "all") {
            let videoLists = [
                {
                    videoCoverAddress: "https://placehold.co/300x250",
                    authorIconAddress: "",
                    title: "Заголовок 1",
                    author: "Автор",
                    views: "35 тыс просмотров",
                    time: "4 час назад",
                    type: "stream",
                    spectators: "12 зрителей",
                    tags: ["sport", "new", "stream"]
                },
                {
                    videoCoverAddress: "https://placehold.co/300x250",
                    authorIconAddress: "https://placehold.co/35x35",
                    title: "Заголовок 2",
                    author: "Автор",
                    views: "15 тыс просмотров",
                    time: "1 час назад",
                    type: "video",
                    tags: ["sport", "video"]
                },
                {
                    videoCoverAddress: "https://placehold.co/300x250",
                    authorIconAddress: "https://placehold.co/35x35",
                    title: "Заголовок 3",
                    author: "Автор",
                    views: "151 тыс просмотров",
                    time: "4 дня назад",
                    type: "video",
                    tags: ["videogame", "video"]
                },
                {
                    videoCoverAddress: "https://placehold.co/300x250",
                    authorIconAddress: "https://placehold.co/35x35",
                    title: "Заголовок 4",
                    author: "Автор",
                    views: "15 тыс просмотров",
                    time: "1 неделя назад",
                    type: "video",
                    tags: ["new", "music"]
                },
                {
                    videoCoverAddress: "https://placehold.co/300x250",
                    authorIconAddress: "https://placehold.co/35x35",
                    title: "Заголовок 5",
                    author: "Автор",
                    views: "1 млн. просмотров",
                    time: "месяц назад",
                    type: "video",
                    tags: ["myMusic", "music"]
                },
                {
                    videoCoverAddress: "https://placehold.co/300x250",
                    authorIconAddress: "https://placehold.co/35x35",
                    title: "Заголовок 6",
                    author: "Автор",
                    views: "2 тыс просмотров",
                    time: "неделю назад",
                    type: "video",
                    tags: ["music", "new"]
                },
                {
                    videoCoverAddress: "https://placehold.co/300x250",
                    authorIconAddress: "https://placehold.co/35x35",
                    title: "Заголовок 7",
                    author: "Автор",
                    views: "311 тыс просмотров",
                    time: "7 дней назад",
                    type: "video",
                    tags: ["myMusic", "music"]
                },
                {
                    videoCoverAddress: "https://placehold.co/300x250",
                    authorIconAddress: "https://placehold.co/35x35",
                    title: "Заголовок 8",
                    author: "Автор",
                    views: "315 тыс просмотров",
                    time: "1 неделя назад",
                    type: "stream",
                    tags: ["stream", "videogame"]
                }]

            if (filter !== "all")
                videoLists = videoLists.filter(video => video.tags.includes(filter))

            ctx.commit("updateVideoList", videoLists)
        }
    }, 
    mutations: {
        updateVideoList(state, videoList) {
            state.videoLists = videoList
        }
    },
    state: {
        videoLists: [],
    },
    getters: {
        videoLists(state) {
            return state.videoLists
        },
    }
}