# Providers

Providers are used to register to the container. In the application, we will find the corresponding instance through their registered token. The token can be a string, symbol or the class itself.

## Class Provider

Classes that do not require additional constructor parameters can be used as class providers. The name of the class will be used as the registered token.

```js
class UserService {}
```

## Custom Class Provider

Use the interface name as the token and the implementation as the provider.

```js
class RoleAuthService extends AuthService {}

const provider = {
  token: 'AuthService',
  useClass: RoleAuthService
};
```

## Factory Provider

Use factory methods to customize instance creation.

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

## Value Provider

Use the value directly as the provider without creation. This allows us to easily read the existing configuration, constants, etc. in the application.

```js
import Constant from './constants';

const provider = {
  token: 'AppConstants',
  useValue: Constant
};
```
