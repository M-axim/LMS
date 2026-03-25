<template lang="pug">
a(href="#").text-decoration-none.video
    .card.bg-transparent.h-100
        img.card-img-top.rounded(:src="videoCoverAddress")
        .card-body.p-2
            .row.g-0
                .col-2.d-flex.align-items-center.align-items-sm-start
                    i.bi.bi-person-circle.text-light.fs-2(v-if="authorIconAddress === ''")
                    span.video-author-icon.d-block.mt-1(v-else)
                        img.rounded-circle.w-100(:src="authorIconAddress")
                .col-10
                    .card-body.p-0.text-light
                        .card-title
                            h5.d-block.video-title.text-truncate {{ title }}
                            p.d-block.video-author.mb-0 {{ author }}
                            .video-info(v-if="type === 'video'")
                                span.video-views.fs-6 {{ views }}
                                span.video-dot.ms-1.me-1
                                span.video-time.fs-6 {{ time }}
                            .stream-info(v-else)
                                span.video-spectators.fs-6.d-block.mb-1 {{ spectators }}
                                span.video-time.fs-6.bg-danger.ps-2.pe-1
                                    i.bi.bi-wifi В ЭФИРЕ
</template>

<style lang="scss">

    .bi-wifi::before {
        margin-right: 0.25rem;
    }

    .video {

        &-dot::after {
            content: "•";
        }

        &-author-icon {
            width: 35px;
            height: 35px;
        }
    }
</style>

<script>
export default {
    props: {
        videoCoverAddress: {
            type: String,
            default: "https://placehold.co/300x250"
        },
        authorIconAddress: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: "Не указан"
        },
        author: {
            type: String,
            default: "NULL"
        },
        views: {
            type: String,
            default: "NULL"
        },
        time: {
            type: String,
            default: "NULL"
        },
        type: {
            type: String,
            default: "video"
        },
        spectators: {
            type: String,
            default: "0 зрителей"
        }
    }
}
</script>