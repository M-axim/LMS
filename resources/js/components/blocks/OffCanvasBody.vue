<template lang="pug">
li
    div.dropdown-divider.border-top.mt-2.mb-2(v-if="text === 'divider'")
    li.nav-item.dropdown(v-else-if="link === 'dropdown'")
        a.nav-link.dropdown-toggle(href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false")
            i(:class="icon") {{ text }}
        ul.dropdown-menu.dropdown-menu-dark.mt-1.mb-1
            li(v-for="(list, index) in lists")
                <router-link :to="list.link" v-if="list.link !== 'NULL'" class="dropdown-item">
                    i.text-dark(v-if="list.icon !== 'NULL'" :class="list.icon") {{ list.text }}
                </router-link>
    h5.text-dark(v-else-if="link === 'title'") {{ text }}
    <router-link v-else :to='link' class="nav-link">
        i(:class="icon" v-if="authorIconAddress === 'NULL'") {{ text }}
        i.bi.bi-person-circle.fst-normal(v-else-if="authorIconAddress === 'default'") {{ text }}
        .d-flex(v-else)
            span.video-author-icon.d-block.me-2
                img.rounded-circle.w-100(:src="authorIconAddress")
            p.video-author.m-0.text-truncate {{ text }}
    </router-link>

</template>

<style lang="scss">

    .video-author {
        max-width: 150px;
    }
    .nav-link,
    .dropdown-item
    {
        & .video-author-icon {
            width: 16px;
            height: 16px;
        }

        & .bi::before {
            margin-right: 0.5rem;
        }
    }
</style>

<script>
export default {
    props: {
        link: {
            type: String,
            default: "NULL"
        },
        text: {
            type: String,
            default: "NULL"
        },
        lists: {
            type: Array,
            default: null
        },
        icon: {
            type: String,
            default: "NULL"
        },
        authorIconAddress: {
            type: String,
            default: 'NULL'
        }
    }
}
</script>