# Container

## Constructor

### `Vesselize(options)`

- **Parameters**

  - `{Object} options`
    - `{Array} providers`

- **Returns**

  Vesselize container instance.

- **Usage**

```js
import { Vesselize } from 'vesselize';
import providers from './providers';

const vesselize = new Vesselize({
  providers
});

export default vesselize;
```

- **References**

  - [Providers](./providers.md)
  - [Create Vesselize Container](../guide/container.md#create-container)

## Instance Methods

### `get(token)`

- **Parameters**

  - `{string | symbol | Class} token`

- **Returns**

Return the provider instance found by token.

- **Usage**

```js
vesselize.get('UserService');
```

- **Reference**

  - [Acquire Instance](../guide/container.md#acquire-instance)

### `getInContext(token, [context])`

- **Parameters**

  - `{string | symbol | Class} token`
  - `{Object} context`
    - `{number} id`

- **Returns**

Return the provider instance found by token and context.

- **Usage**

```js
const fooUserContext = {
  id: 100000
};

const barUserContext {
  id: 200000
};

const fooUserService = vesselize.get('UserService', fooUserContext);
const barUserService = vesselize.get('UserService', barUserContext);
```

- **Reference**

  - [Acquire Instance](../guide/container.md#acquire-instance)

### `getAsync(token)`

- **Parameters**

  - `{string | symbol | Class} token`

- **Returns**

Return the promise that will resolve the provider instance.

- **Usage**

```js
vesselize.getAsync('AuthService').then(authService => {
  // do something with authService
});
```

- **Reference**

  - [Acquire Async Instance](../guide/container.md#acquire-async-instance)

### `getInContextAsync(token, [context])`

- **Parameters**

  - `{string | symbol | Class} token`
  - `{Object} context`
    - `{number} id`

- **Returns**

Return the promise that will resolve the provider instance in specific context.

- **Usage**

* **Usage**

```js
const fooUserContext = {
  id: 100000
};

const barUserContext {
  id: 200000
};

vesselize.getInContextAsync('AuthService', fooUserContext).then(fooAuthService => {
  // do something with authService
});


vesselize.getInContextAsync('AuthService', barUserContext).then(barAuthService => {
  // do something with authService
});
```

- **Reference**

  - [Acquire Async Instance](../guide/container.md#acquire-async-instance)

### `getProvider(token)`

- **Parameters**

  - `{string | symbol | Class} token`
  - `{Object} context`
    - `{number} id`

- **Returns**

Return the source class/factory.

- **Usage**

```js
const getProvider = vesselize.getProvider('UserService');

const customUserService = new UserService({ name: 'Felix Yang' });
```

## Aware Interfaces

Aware interfaces are used for dependency injection.

### `setVesselize(vesselize)`

- **Parameters**

  - `{Vesselize} vesselize`

- **Usage**

If you want to inject the vesselize container into the instance, you can implement the `setVesselize` interface for it.

- **Reference**

  - [Vesselize Aware Interface](../guide/dependencies.md#setvesselize)
