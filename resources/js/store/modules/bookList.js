export default {
    state: {
        bookList: [],
        bookListLength: 0,
        countBookOnPage: 10
    },
    actions: {
        async fetchBookList(ctx, {page = 0, tags = []}) {
            let bookList = [
                {
                    title: "Немного о России",
                    description: "О колониализме : [Сборник : Перевод] / К. Маркс, Ф. Энгельс. - Москва : Прогресс, Б. г. (1990). - 213,[1] с.; 20 см.; ISBN 5-01-002409-8 (В пер.) : 90 к.",
                    imgSrc: "https://placehold.co/50",
                    tags: ["русский", "история", "история России"],
                    publicationDate: 2020,
                    bookAvailable : true 
                },
                {
                    title: "19th Century America Progession",
                    description: "The 19th Century in American history is characterized by USA Rapid Westward Expansion, New Towns and Cities, Big Population Increases, Industrialization and infrastructure advancements",
                    imgSrc: "https://placehold.co/50",
                    tags: ["английский", "история", "история Америки"],
                    publicationDate: 2021,
                    bookAvailable : false 
                },
                {
                    title: "Geschichte Deutschlands (Deutschland ver.)",
                    description: "Das englische Wort Deutschland leitet sich vom lateinischen Germania ab, das in Gebrauch kam, nachdem Julius Caesar es für die Völker östlich des Rheins übernommen hatte",
                    imgSrc: "https://placehold.co/50",
                    tags: ["немецкий", "история", "история Германии"],
                    publicationDate: 2021,
                    bookAvailable : false 
                },
                {
                    title: "History of Germany (English ver.)",
                    description: "The English word Germany derives from the Latin Germania, which came into use after Julius Caesar adopted it for the peoples east of the Rhine",
                    imgSrc: "https://placehold.co/50",
                    tags: ["английский", "история", "история Германии"],
                    publicationDate: 2020,
                    bookAvailable : true 
                },
                {
                    title: "101 способ откосить от армии",
                    description: "Свежая подборка возможностей откосить от армии в 2024 году",
                    imgSrc: "https://placehold.co/50",
                    tags: ["русский", "комедия"],
                    publicationDate: 2023,
                    bookAvailable : false 
                },
                {
                    title: "Численные методы",
                    description: "Все о курсе 'численные методы' с примерами и иллюстрациями",
                    imgSrc: "https://placehold.co/50",
                    tags: ["русский", "хоррор", "наука"],
                    publicationDate: 2023,
                    bookAvailable : true 
                },
                {
                    title: "За гранью добра",
                    description: "История о группе людей, решившихся изменить свою жизнь на 180 градусов",
                    imgSrc: "https://placehold.co/50",
                    tags: ["русский", "романтика", "будущее"],
                    publicationDate: 2021,
                    bookAvailable : true 
                },
                {
                    title: "Что делать, если бесит человек?",
                    description: "Множество способов избавится от человека, который вас бесит. (P.S. Данная книга не побуждает ни к каким действиям)",
                    imgSrc: "https://placehold.co/50",
                    tags: ["русский", "хоррор", "для взрослых"],
                    publicationDate: 2021,
                    bookAvailable : true 
                },
                {
                    title: "100 способ избавитя от труппа",
                    description: "Подробное руководство от избавления случайно появивщегося труппа человека",
                    imgSrc: "https://placehold.co/50",
                    tags: ["русский", "для взрослых"],
                    publicationDate: 2021,
                    bookAvailable : false 
                },
                {
                    title: "Как не вылететь из колледжа, практические советы",
                    description: "Действующие советы от лучших двоечников страны, как не вылететь из колледжа из-за неуспеваемости, подходит всем курсам",
                    imgSrc: "https://placehold.co/50",
                    tags: ["русский", "наука"],
                    publicationDate: 2022,
                    bookAvailable : true 
                },
                {
                    title: "В дали от дома",
                    description: "Фэнтезийный рассказ о маленьком эльфе 'Олаф', оставшиеся без дома из-за злого колдуна 'Болдуина'",
                    imgSrc: "https://placehold.co/50",
                    tags: ["русский", "фэнтези", "комедия"],
                    publicationDate: 2019,
                    bookAvailable : true 
                },
            ]

            let posShow = page * ctx.state.countBookOnPage

            if (tags.length > 0)
                bookList = bookList.filter(w => tags.every(l => w.tags.includes(l)))

            ctx.commit("updateBookList", bookList.slice(posShow, posShow + 10))
            ctx.commit("updateBookListLength", bookList.length)
        }
    }, 
    mutations: {
        updateBookList(state, bookList) {
            state.bookList = bookList
        },
        updateBookListLength(state, bookListLength) {
            state.bookListLength = bookListLength
        },
        updateCountBookOnPage(state, newCount) {
            state.countBookOnPage = newCount
        }
    },
    getters: {
        bookList(state) {
            return state.bookList
        },
        bookListLength(state) {
            return state.bookListLength
        },
        countBookOnPage(state) {
            return state.countBookOnPage
        },
    }
}