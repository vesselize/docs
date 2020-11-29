# Introduction

![logo](/images/logo.png)

Vesselize is a JavaScript IoC container inspired by the Nest framework. It can easily integrate with Vue.js, React and other frameworks quickly.

Through Vesselize, you can easily use instances anywhere and resolve their dependencies, thereby reducing the complexity of large-scale Web applications.

## Concepts

- **Providers** - Providers are generally constructors that can be instantiated. It can also be any factory method and declared values. They will all be registered in the container for dependency lookup and injection.
- **Container** - The responsibility of the container is to initialize the instances and resolve their dependencies.
- **Context** - By default, instances are singletons. By specifying a context object, we can also create an instance bound to this context.
