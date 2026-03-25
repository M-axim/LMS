<template lang="pug">
#newTab.modal.fade(tabindex='-1' data-bs-backdrop="static" aria-labelledby='newTabLabel' aria-hidden='true')
    .modal-dialog.modal-dialog-centered
        .modal-content
            .modal-header
                h1#newTabLabel.modal-title.fs-5(v-if="id === null") Новый предмет
                h1#newTabLabel.modal-title.fs-5(v-else) Изменить предмет
            .modal-body
                .mb-2
                    v-inputLine(:label="`Введите заголовок`" v-model:value="title")
                    p.m-0.ms-2.text-danger {{ titleError }}
                .mb-2(v-if="id === null")
                    v-inputSelect(:label="`Режим отображения`" :options="displayModeList" :rating="displayMode" v-model:value="displayMode")
                    p.m-0.ms-2.text-danger {{ displayModeError }}
            .modal-footer
                p.m-0.ms-2.text-danger {{ formError }}
                button.btn.btn-primary(type="button" data-bs-dismiss="modal") Закрыть
                button.btn.btn-primary(type='button' @click="newClass" v-if="id === null") Добавить
                button.btn.btn-primary(type='button' @click="newClass" v-else) Изменить
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            id: null,
            title: "",
            titleError: "",
            displayMode: 0,
            displayModeError: "",
            formError: ""
        }
    },
    computed: {
        ...mapGetters(["tabObject", "displayModeList", "courseObject"])
    },
    methods: {
        ...mapMutations(["newCourse", "updateTab", "getCourseObject", "newTab", "getDisplayModeOptions"]),
        errorClean() {
            this.titleError = ""
            this.displayModeError = ""
        },
        newClass() {
            this.errorClean()

            if (this.title.length < 1)
                this.titleError = "Заголовок не введен"
            if (this.displayMode == 0)
                this.displayModeError = "Режим отображения не выбран"

            if (this.title !== "" && this.title.length >= 1 && this.displayMode !== 0) {
                let tmpTab = {
                    tabId: this.id,
                    tabHeader: this.title,
                    displayMode: this.displayMode,
                }
                if (this.compareObject(tmpTab) === -1) {
                    this.id === null ? this.newTab({courseId: this.$route.params.course_id, tabObject: tmpTab}) : this.updateTab({courseId: this.$route.params.course_id, tabObject: tmpTab})
                    this.cleanField()                
                    this.errorClean()
                }
                else this.formError = "Такая вкладка уже есть"
            }
        },
        compareObject(object) {
            if (this.tabObject.title == object.tabHeader)
                return -1
            return this.courseObject.courseExerciseList.findIndex( (e) => e.tabHeader == object.tabHeader && e.displayMode == object.displayMode)
        },
        cleanField() {
            this.id = null
            this.title = ""
            this.displayMode = 0
        }
    },
    async mounted() {
        this.getCourseObject(this.$route.params.course_id)
        this.cleanField()
        this.getDisplayModeOptions()
    },
    watch: {
        tabObject: {
            handler() {
                if (this.tabObject) {
                    this.id = this.tabObject.tabId
                    this.title = this.tabObject.tabHeader
                    this.displayMode = Number(this.tabObject.displayMode)
                } else 
                    this.cleanField()
            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>