<template lang="pug">
.modal.fade#docxModal(tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true")
    .modal-dialog.modal-dialog-scrollable.modal-fullscreen
        .modal-content
            .modal-header.bg-white
                h5.modal-title#staticBackdropLabel Просмотр документа
                button.btn.btn-lg.btn-close(type="button" data-bs-dismiss="modal" aria-label="Close")
            .modal-body
                .docx(ref="docx") {{ getDocx() }}
            .modal-footer
                button.btn.btn-lg.btn-outline-primary(type="button" data-bs-dismiss="modal" aria-label="Close") Выйти
                a.btn.btn-lg.btn-outline-primary(:href="pathToDocx" download) Скачать документ

</template>

<script>
import { renderAsync } from "docx-preview"
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters(["pathToDocx"])
  },
  methods: {
    getDocx() {
        if (this.pathToDocx)
        {
            fetch(this.pathToDocx)
            .then((response) => {
            let docData = response.blob()
            let docxDiv= this.$refs.docx
            renderAsync(docData, docxDiv, null, {
                inWrapper: true,
                ignoreWidth: false,
                ignoreHeight: false,
                ignoreFonts: false,
                breakPages: true,
                ignoreLastRenderedPageBreak: true,
                experimental: false,
                trimXmlDeclaration: true,
                debug: false,
            })
        })
        }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>