# Context

Sometimes, you may need to get a separate instance based on the current context. In this case, simply pass a context object with `id` property.

## Acquire Instance in Context

```js
const currentUserContext = {
  id: 123456
};

const userService1 = container.get('UserService', currentUserContext);
const userService2 = container.get('UserService', currentUserContext);

console.log(userService1 === userService2); // => true
```
