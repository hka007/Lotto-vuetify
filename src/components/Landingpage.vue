<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <div class="text-h5 text-center py-4">
            {{welcomeMessage.title}}
          </div>
          <div class="text-subtitle-1 text-center">
            {{welcomeMessage.subtitle}}
          </div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-img
            src="https://cms.seedmatch.de/wp-content/uploads/2019/09/content-8.jpeg"
            aspect-ratio="1.7"
            class="grey lighten-2"
          ></v-img>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" class="text-center">
          <v-btn color="secondary" text :to="{ name: 'Eurojackpot' }">Go to Eurojackpot</v-btn>
        </v-col>
      </v-row>

    </v-container>
  </v-app>
  <LotteryPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      welcomeMessage: {
        title: "Welcome to Lottery heroes!",
        subtitle: "Try your luck and join the excitement of the Eurojackpot!"
      }
    };
  }
});
</script>

<style scoped>
.v-btn {
  margin-top: 20px;
}
</style>
