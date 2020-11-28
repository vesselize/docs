# HOC

Since hooks can only be used for function components, in order to be able to use vesselize in class components, we add the vesselize container to the props of the class component through the `connect` HOC factory.

The following APIs are included in the [@vesselize/react](https://www.npmjs.com/package/@vesselize/react) NPM package.

## `connect(options)`

- **Parameters**

  - `{Object} options`

- **Returns**: `{Function} HOC`

Return the HOC component connected to vesselize.

- **Reference**

  - [Acquire Instance in Class Component](../guide/integration-react.md#acquire-instance-in-class-component)
