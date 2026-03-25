<template lang="pug">

header(v-if="this.$route.name !== 'Login'")
  nav.navbar.navbar-expand-lg.navbar-light.bg-light.fixed-top
    .container-fluid
      router-link(:to="`/`" class="nav-link m-0 ms-md-3") На главную

      button.navbar-toggler(type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation")
        span.navbar-toggler-icon
      .collapse.navbar-collapse#navigation
        ul.navbar-nav.ms-auto
          li.nav-item(v-if="user.role !== 'teacher'")
            router-link(:to="`/grades`" class="nav-link") Оценки
          li.nav-item(v-if="user.role !== 'student'")
            router-link(:to="`/homeWork`" class="nav-link") Д/З
          li.nav-item(v-if="user.role !== 'student'")
            router-link(:to="`/teacher`" class="nav-link") Учителя
          li.nav-item(v-if="user.role !== 'student'")
            router-link(:to="`/student`" class="nav-link") Учащиеся
            
          li.nav-item(v-if="this.user.role !== 'user'")
            button.btn.btn-secondary.dropdown-toggle#asd(
              data-bs-toggle="dropdown" 
              aria-expanded="false"
              data-bs-auto-close="inside"
              @click="open = !open") {{ user.name }}

            ul.dropdown-menu.top-100.end-25(aria-labelledby="asd" :class="{'show' : open}")
              li(v-for="(nav, index) in dropdownNavs" :key="index")
                router-link(:to="nav.link" class="dropdown-item") {{ nav.name }}
              li
                button.btn.btn-outline.btn-sm(@click="updateRole('user')")
                  i.bi.bi-box-arrow-in-left.me-2.cursor-pointer.icon-padding Выйти

          button.btn.btn-sm(@click="updateRole('admin')" v-else-if="this.user.role === 'user'")
            i.bi.bi-box-arrow-in-left.me-2.cursor-pointer.icon-padding Войти
.header-divider

</template>
    
<script>
import {mapActions, mapGetters, mapMutations} from "vuex"
    export default {
        data() {
          return {
            dropdownNavs: [
            ],
            open: false
          }
        },
        computed: {
          ...mapGetters(["user", "courseList"])
        },
        methods: {
          ...mapActions(["fetchUser", "fetchCourseList"]),
          ...mapMutations(["updateRole", "updateClass"])
        },
        mounted() {
          this.fetchUser()
        },
        watch: {
        user: { 
          handler() {
            if (JSON.parse(localStorage.getItem('user')).role === "user")
              this.$router.push({ name: 'Login'});
            else {
              this.name = JSON.parse(localStorage.getItem("user")).name
            }
          },
          deep: true
        },
        courseList: {
            handler(e) {
                this.updateClass(this.courseList)
            },
            deep: true
        },
      },
}
</script>

<style lang="scss" scoped>

.header-divider {
    height: 56px;
}
.icon-padding::before {
  margin-right: 0.2rem;
}
</style>