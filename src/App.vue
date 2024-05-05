<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Lottery heroes</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'Landingpage' }">Home</v-btn>
      <v-btn text :to="{ name: 'Eurojackpot' }">Eurojackpot</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
