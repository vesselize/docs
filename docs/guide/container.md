# Container

A container is used to create, manage, and acquire instances.

## Create Container

Import all providers and create vesselize container:

```js
import { Vesselize } from 'vesselize';
import { UserService, createAdminUserService } from './services/UserService';
import { AuthService } from './services/AuthService';
import { Constants } from './config/constants';

const vesselize = new Vesselize({
  providers: [
    // class provider
    {
      token: 'UserService',
      useClass: UserService
    },

    // factory provider
    {
      token: 'AdminUserService',
      useFactory: createAdminUserService
    },

    // async factory provider
    {
      token: 'AuthService',
      useFactory: createAuthService
    },

    // value provider
    {
      token: 'AppConstant',
      useValue: Constants
    }
  ]
});

export default vesselize;
```

## Acquire Instance

You can get the corresponding instance through the provider name.

```js
const userService = vesselize.get('UserService');
const adminUserService = vesselize.get('AdminUserService');
const AppConstant = vesselize.get('AppConstant');
```

## Acquire Async Instance

The instance promise created by the asynchronous factory can be obtained through the `getAsync` method.

```js
vesselize.getAsync('AuthService').then(authService => {
  // do something with authService
});
```
