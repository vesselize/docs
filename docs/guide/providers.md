# Providers

## Class

Simple constructor without parameters.

```js
class UserService {
  async getUser() {
    // fetch and process user
  }
}
```

## Factory

Return any instance including promise through factory method.

### Create Customized Instance

```js
function createAdminUserService() {
  return new UserService({
    auth: ['ADMIN'],
  });
}
```

### Create Async Instance

Sometimes, the instance that needs to be created depends on some remote data, and we can return a promise through the factory method.

```js
// async factory
async function createAuthService() {
  const roles = await fetchRoles();

  return new AuthService(roles);
}
```

```js
// class
class AuthService() {
  constructor(roles = []) {
    this.roles = roles;
  }

  hasRole() {}
}
```

## Values

Declared values such as configuration, constants, etc.

```js
export const CONSTANTS = {
  BASE_URL: '/path/to/base/url',
};
```
