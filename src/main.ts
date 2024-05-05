/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'


// apollo
import { provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

import router from './router';  // make sure the path matches your file structure



const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: '/graphql',
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

registerPlugins(app)

app.use(router);
app.mount('#app')
