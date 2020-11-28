# React

## Installation

```bash
yarn add @vesselize/react
# OR
npm i @vesselize/react
```

## Basic Usage

### Create Providers

View the [complete guide](./providers.md) of providers.

### Combine Providers

```js
import UserService from './services/UserService';
import RoleAuthService from './services/RoleAuthService';

export default [
  UserService,

  // Custom provider name
  {
    token: 'AuthService',
    useClass: RoleAuthService
  }
];
```

### Add `VesselizeProvider`

```jsx
import React from 'react';
import { VesselizeProvider } from '@vesselize/react';
// combined vesselize providers
import providers from './providers';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <VesselizeProvider providers={providers}>
      <UserProfile />
    </VesselizeProvider>
  );
}

export default App;
```

### Acquire Instance in Function Component

In the function component, you can get the instance directly through the hooks provided by vesselize.

```jsx
import React, { useState, useEffect } from 'react';
import { useInstance } from '@vesselize/react';

function UserProfile() {
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const userService = useInstance('UserService');
  const authService = useInstance('AuthService');

  useEffect(() => {
    userService.getUser().then(data => {
      setUser(data);
      setIsAdmin(authService.isAdmin(data));
    });
  }, []);

  return (
    <div>
      <span>Name: {user.name || '✨'}</span>
      {isAdmin && <span>Administrator</span>}
    </div>
  );
}
```

### Acquire Instance in Class Component

Through `connect` HOC factory, vesselize can be passed in as the props of the class component..

```jsx
import React from 'react';
import { connect } from '@vesselize/react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, isAdmin: false };
  }

  componentDidMount() {
    // get vesselize from props
    const { vesselize } = this.props;
    // get instances
    const userService = vesselize.get('UserService');
    const authService = vesselize.get('AuthService');

    userService.getUser().then(data => {
      this.setState({
        user: data,
        isAdmin: authService.isAdmin(data)
      });
    });
  }

  render() {
    return (
      const { user, isAdmin } = this.state;

      <div>
        <span>Name: {user.name || '✨'}</span>
        {isAdmin && <span>Administrator</span>}
      </div>
    );
  }
}

// connect vesselize to component
export default connect()(UserProfile)
```
