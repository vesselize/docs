# Providers

Providers are the classes, factory methods, or any values that can be used to register in the Vesselize container.

## Class Provider

JavaScript constructors that do not require additional parameters are all available providers.

```js
class UserService {
  async getUser() {
    // fetch and process user
  }
}
```

In most cases, since the function name will be lost after the production build, you must specify the name of the provider through `token` option.

```js
const provider = {
  token: 'UserService',
  useClass: UserService
};
```

The `token` can also be a Symbol:

```js
// Specify a symbol as the name of the provider.
const token = Symbol('svc:user');
const provider = {
  token,
  useClass: UserService
};
```

## Factory Provider

Use factory methods to customize instance creation, you can return any instance including promise.

### Create Customized Instance

```js
const roles = ['ADMIN'];

const provider = {
  token: 'AuthService',
  useFactory() {
    // customize creation
    return new RoleAuthService(roles);
  }
};
```

### Create Async Instance

Sometimes, the instance that needs to be created depends on some remote data, and we can return a promise through the factory method.

```js
// async factory
async function createAuthService() {
  const roles = await fetchRoles();

  return new RoleAuthService(roles);
}
```

Definition of provider:

```js
const provider = {
  token: 'AuthService',
  useFactory: createAuthService
};
```

## Value Provider

Declared values such as configuration, constants, etc.

```js
export const CONSTANTS = {
  BASE_URL: '/path/to/base/url'
};
```

Definition of provider:

```js
const provider = {
  token: 'AppConstant',
  useValue: CONSTANTS
};
```
