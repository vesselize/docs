# Dependencies

In order to resolve the dependency between instances, Vesselize injects itself into the instance, so that other instances can be accessed through vesselize.

## Aware Interfaces

The Aware interfaces will be called after the container has created all synchronization instances.

### setVesselize

Any instance that implements the `setVesselize` method can obtain the Vesselize container.

```js
class UserService {
  authService = null;

  hasRole(role) {
    this.authService.hasRole(role);
  }

  setVesselize(vesselize) {
    this.authService = vesselize.get('AuthService');
  }
}
```
