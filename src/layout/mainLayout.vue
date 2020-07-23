<template>
  <div class='mainLayout'>
    <v-app>
      <!-- left top bar -->
      <!-- <layoutAppBar /> -->
      <layoutDrawer />
    </v-app>
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    expandOnHover: false,
  }),
  components: {
    layoutAppBar: () => import('@/components/core/AppBar'),
    layoutDrawer: () => import('@/components/core/Drawer'),
  },
}
</script>

<style lang='less' scoped>
</style>