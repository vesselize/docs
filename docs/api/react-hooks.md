# Hooks

For the concept and usage of React Hooks, please refer to [official documents](https://reactjs.org/docs/hooks-intro.html).

The following APIs are included in the [@vesselize/react](https://www.npmjs.com/package/@vesselize/react) NPM package.

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

  - [Acquire Instance In Component](../guide/integration-react.md#acquire-instance-in-function-component)

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

useEffect(() => {
  userServicePromise.then(userService => {
    // do something with userService
  });
}, []);
```

- **Reference**

  - [Acquire Instance In Component](../guide/integration-react.md#acquire-instance-in-function-component)

## `useProvider(token)`

- **Parameters**

  - `{string | symbol | Class} token`

- **Returns**

Return the provider class or factory.

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
