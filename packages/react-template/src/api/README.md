# 📁 api

The "api" folder is designed to handle calls to native APIs using the fetch function. These calls are essential for retrieving real-time data from external sources, such as remote servers or web services.

## 📑 Table of Contents

- [Folder Organization](#folder-organization)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [Security](#security)
- [Documentation](#documentation)
- [Testing](#testing)
- [Best Practice](#best-practice)

## <span id="folder-organization">Folder Organization</span>

The "api" folder can be organized as follows :

1. **API Endpoints** : Create a separate file for each API you are calling. For example, if you have a user management API and a data retrieval API, you can have the files `users.ts` and `data.ts` to handle these respective calls.

2. **Call Functions** : Inside each API file, define dedicated functions to make `fetch` requests to the corresponding endpoints. These functions can also include handling responses and errors.

## <span id="usage">🧑🏻‍💻 Usage</span>

When you need to make a call to a native API, import the appropriate function from the "api" folder into your code. For example:

```javascript
import { getUsers } from '@Front/api/users';

const users = getUsers();
```

## <span id="error-handling">Error Handling</span>

Ensure proper error handling in your API call functions. You can use error handling mechanisms such as promises or `try/catch` to capture and handle potential errors when making API calls.

## <span id="security">Security</span>

Be mindful of security when interacting with external APIs. Avoid storing sensitive information, such as API keys, directly in your source code. Use environment variables or external configuration files to manage this sensitive information securely.

## <span id="documentation">Documentation</span>

Document each API call function, specifying expected parameters, possible responses, and any relevant information about the API itself.

## <span id="testing">Testing</span>

Whenever possible, write unit tests to validate the behavior of API call functions. This will ensure that API calls work correctly and quickly detect potential issues.

## <span id="best-practice">🎖️ Best Practice</span>

It is recommended to implement a custom fetch function that serves as an enhancement or override of the default fetch function. This can be particularly useful for incorporating common configurations, such as adding headers like an API token.

Consider the following example of a custom fetch function :

```javascript
// Custom fetch function with common configurations
export const fetchApi = (uri, options) => {
  const headers = new Headers(options.headers ?? []);
  headers.append('x-api-key', '<token-api>');

  return fetch(uri, { ...options, headers });
};
```

In this example, the fetchApi function extends the default fetch function by automatically including an API token in the request header. This practice helps centralize common configurations and promotes consistency across your application.
