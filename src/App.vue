<template>
  <v-app>
    <HeaderNavigation />  
    <v-main class="px-3 py-3">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import HeaderNavigation from './components/HeaderNavigation.vue';


export default {
    name: 'App',
    data: () => ({
    //
    }),
    components: { HeaderNavigation }
}
</script>
