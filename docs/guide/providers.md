# Providers

Providers are the classes, factory methods, or any values that can be used to register in the Vesselize container.

## Class

Simple constructor without parameters.

```js
class UserService {
  async getUser() {
    // fetch and process user
  }
}
```

## Custom Providers

### Class

You can specify the name of the provider through custom options.

```js
// Specify a symbol as the name of the provider.
const token = Symbol('svc:user');
const provider = {
  token,
  useClass: UserService
};
```

### Factory

Return any instance including promise through factory method.

#### Create Customized Instance

```js
function createAdminUserService() {
  return new UserService({
    auth: ['ADMIN']
  });
}
```

Definition of provider:

```js
const provider = {
  token: 'AdminUserService',
  useFactory: createAdminUserService
};
```

#### Create Async Instance

Sometimes, the instance that needs to be created depends on some remote data, and we can return a promise through the factory method.

```js
// async factory
async function createAuthService() {
  const roles = await fetchRoles();

  return new AuthService(roles);
}
```

Definition of provider:

```js
const provider = {
  token: 'AuthService',
  useFactory: createAuthService
};
```

### Value

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
