<template>
  <v-container>
    <v-progress-linear
      v-if="loading"
      color="yellow-darken-2"
      indeterminate
    >
    </v-progress-linear>

    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="draw in draws" :key="draw.date">
        <v-card class="pa-3" color="blue-grey-lighten-5" outlined elevation="2" >
          <v-card-title class="headline">
            $ {{ draw.jackpot.toLocaleString() }}
          </v-card-title>
          <v-card-subtitle>
            {{ new Date(draw.date).toLocaleDateString() }}
          </v-card-subtitle>
          <v-card-text>
            <div>
              <v-btn 
                v-for="number in draw.numbers"
                :key="number"
                color="orange-accent-2"
                class="ma-1" 
                rounded
                >
                {{ number }}
              </v-btn>
              
              <v-btn 
                v-for="addNumber in draw.additionalNumbers"
                :key="addNumber"
                color="yellow-accent-2"
                class="ma-1"
                rounded
                >
                {{ addNumber }}
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref , watchEffect} from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

interface Draw {
  date: string;
  jackpot: number;
  numbers: number[];
}

interface DrawData {
  draw: {
    success: boolean;
    draws: Draw[];
  };
}

export default defineComponent({
  setup() {
    const draws = ref<Draw[]>([]);
    const loading = ref(false);
    const error = ref<Error | null>(null);

    const { result, loading: queryLoading, error: queryError } = useQuery<DrawData>(gql`
      query GetLotteryDraws {
        draw(type: "eurojackpot") {
          success
          draws {
            date
            jackpot
            numbers
            additionalNumbers
          }
        }
      }
    `);

    watchEffect(() => {
      if (result.value) {
        console.log(result.value.draw.draws);
        draws.value = result.value.draw.draws;
      }
      loading.value = queryLoading.value;
      error.value = queryError.value;
    });

    return {
      draws,
      loading,
      error,
    };
  },
});
</script>

<style>
.v-chip {
  width: 35px;  
  }
</style>