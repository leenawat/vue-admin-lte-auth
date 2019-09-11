<template>
  <aside id="slider" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="~admin-lte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{ currentUser.name }}</p>
          <a href="#"><i class="fa fa-circle" :style="`color:${currentUser.state.color}`"></i> {{ currentUser.state.name }}</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
       <!-- <ul data-widget="tree" class="sidebar-menu"> -->
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
       <!-- </ul> -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
// import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  name: 'va-slider',
  data () {
    return {      options: {
        height: '100%',
        width: '230px'
      },
      currentUser: { "name": "Alexander Pierce", "position": "Web Developer", "state": { "color": "#3c763d", "name": "Online" }, "createdAt": "[native Date Wed Aug 21 2019 11:23:25 GMT+0700 (Indochina Time)]" }
    }
  },
  props: {
    slideMenuItems: {
      type: Array,
      // default: []
    }
  },
  // created () {

  // },
  // computed: {
  //   ...mapGetters([
  //     'currentUser'
  //   ])
  // },
  components: {
    SidebarItem
  },
  computed: {
    routes () {
      return this.$router.options.routes
    }
  }
}
</script>

<style>
</style>
