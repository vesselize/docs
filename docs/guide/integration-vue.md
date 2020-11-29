# Vue.js

## Installation

```bash
yarn add @vesselize/vue
# OR
npm i @vesselize/vue
```

## Basic Usage

### Create Providers

View the [complete guide](./providers.md) of providers.

### Create Vue Plugin

Through the `createVesselize` method, we can create a Vue.js plugin, which is also an instance of Vesselize.

```js
import { createVesselize } from '@vesselize/vue';
import UserService from './services/UserService';
import RoleAuthService from './services/RoleAuthService';

const vesselize = createVesselize({
  providers: [
    UserService,

    // Custom provider name
    {
      token: 'AuthService',
      useClass: RoleAuthService
    }
  ]
});

export default vesselize;
```

### Use Vue Plugin

```js
import { createApp } from 'vue';
import vesselize from './vesselize';
import App from './App.vue';

const app = createApp(App);

app.use(vesselize);

app.mount('#app');
```

### Acquire Instance in Component

Through the `useInstance` and other composition APIs, we can directly get the instance in the Vue component.

```vue
<template>
  <div>
    <span>Name: {{ user.name || '✨' }}</span>
    <span v-if="isAdmin">Administrator</span>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useInstance } from '@vesselize/vue';

export default {
  setup() {
    const user = ref({});
    const isAdmin = ref(false);
    const userService = useInstance('UserService');
    const authService = useInstance('AuthService');

    userService.getUser(data => {
      user.value = data;
      isAdmin.value = authService.isAdmin(data);
    });

    return {
      user,
      isAdmin
    };
  }
};
</script>
```

## Vuex Injection

In order to use vesselize in Vuex Actions, we can create a Vuex plugin through the `createVuexPlugin` method of the [VueVesselize instance](#create-vue-plugin).

### Basic Usage

```js
import vueVesselize from './vesselize';

const store = createStore({
  state: {
    user: {}
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    async setUser(context) {
      const { vesselize } = this;
      const userService = vesselize.get('UserService');

      const user = await userService.getUser();

      context.commit('SET_USER', user);
    }
  },
  // create vuex plugin
  plugins: [vueVesselize.createVuexPlugin()]
});
```
