<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase text-grey">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Dropdawn menu -->
      <v-menu transition="slide-x-transition">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" class="bg-grey-lighten-2 text-grey-darken-2" prepend-icon="mdi-chevron-down">
            menu
          </v-btn>
        </template>

        <v-list class="">
          <v-list-item v-for="(item, i) in items" :key="i" class="pointer  text-grey-darken-2" :to="item.route">
            <div class="d-flex">
              <v-icon :icon="item.icon" class="mr-2"></v-icon>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </div>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon icon="mdi-logout" class="ms-3 text-h5"></v-icon>
      </v-btn>

    </v-toolbar>



    <v-navigation-drawer v-model="drawer" temporary color="teal" class="h-screen">
      <div class="d-flex justify-space-between">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="John Leider"></v-list-item>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item v-for="item in items" :key="item.text" :prepend-icon="item.icon" :title="item.text"
          :value="item.text" :to="item.route"></v-list-item>
      </v-list>

      <div class="d-flex justify-center">
        <PopUp class="" />
      </div>

    </v-navigation-drawer>

    

  </nav>
</template>

<script>
import PopUp from './PopUp.vue';


export default {
    data() {
        return {
            drawer: false,
            items: [
                { text: 'Dashboard', icon: 'mdi-home', route: '/' },
                { text: 'My Project', icon: 'mdi-folder', route: '/project' },
                { text: 'Team', icon: 'mdi-account', route: '/team' },
            ],
        };
    },
    components: { PopUp }
}
</script>

<style scoped>
.pointer:hover {
  cursor: pointer;
}
</style>