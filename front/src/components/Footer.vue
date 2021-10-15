<template>
  <v-footer
    color="#263555"
    dark
    padless
  >
    
      <v-card-title class="teal">
        <strong class="subheading">Contactenos</strong>



        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Club Campestre Arrayanes</strong>
      </v-card-text>
 
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
      ],
    }),
  }
</script>