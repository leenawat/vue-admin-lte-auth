<template>
  <ul data-widget="tree" class="sidebar-menu">
    <router-link tag="li" v-for="(child, index) in item.children" :key="index" :to="child.path" v-if="!child.hidden">
      <a>
        <i :class="child.meta.icon"></i><span>{{ child.meta.name }}</span>
        <span class="pull-right-container" v-if="child.meta.badge">
          <small class="label pull-right" :class="[child.meta.badge.type==='String'?'bg-green':'label-primary']">{{ child.meta.badge.data }}</small>
        </span>
      </a>
    </router-link>
  </ul>

</template>
<script>
export default {
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  methods: {
    hasOneShowingChild (children, parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    }
  }
}
</script>
<style>
</style>