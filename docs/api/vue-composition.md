# Composition API

For the concept and usage of Composition API, please refer to [official documents](https://v3.vuejs.org/api/composition-api.html#setup).

The following APIs are included in the [@vesselize/vue](https://www.npmjs.com/package/@vesselize/vue) NPM package.

## `useInstance(token, [context])`

- **Parameters**

  - `{string | symbol | Class} token`
  - `{Object} context`
    - `{number} id`

- **Returns**

Return the provider instance found by token.

- **Usage**

It can be used in the component's setup method to obtain an instance.

```js
const userService = useInstance('UserService');

// in specific context
const currentUserContext = {
  id: 123456
};
const currentUserService = useInstance('UserService', currentUserContext);
```

- **Reference**

  - [Acquire Instance in Component](../guide/integration-vue.md#acquire-instance-in-component)

## `useAsyncInstance(token, [context])`

- **Parameters**

  - `{string | symbol | Class} token`
  - `{Object} context`
    - `{number} id`

- **Returns**

Return the promise that will resolve the provider instance.

- **Usage**

```js
const userServicePromise = useAsyncInstance('UserService');

userServicePromise.then(userService => {
  // do something with userService
});
```

- **Reference**

  - [Acquire Instance in Component](../guide/integration-vue.md#acquire-instance-in-component)

## `useProvider(token)`

- **Parameters**

  - `{string | symbol | Class} token`

* **Returns**

Return the source class or factory.

- **Usage**

Create a custom instance by yourself through a class or factory.

```js
const UserService = useProvider('UserService');

const customUserService = new UserService({ name: 'Felix Yang' });
```

## `useVesselize`

- **Returns**

Vesselize instance.

- **Usage**

Get the instance of vesselize and do whatever you want.

```js
const vesselize = useVesselize('UserService');

const userService = vesselize.get('UserService');
```

- **Reference**

  - [Vesselize Container](./container.md#instance-methods)
