# 📁 config

The "config" folder is intended to store all important configurations and utilities needed for our React project. Bringing together this information in one place makes managing configuration settings easier and ensures better code organization.

## 📑 Table of Contents

- [Folder Organization](#folder-organization)
- [Content Example](#content-example)
- [Usage](#usage)
- [Best Practice](#best-practice)

## <span id="folder-organization">Folder Organization</span>

Within the "config" folder, you can find the following elements:

1. **Configuration Files** : Files containing variables and configuration parameters, such as `apiConfig.ts` for configurations related to API calls, `appConfig.ts` for general application settings, `queryClientConfig.ts` for react-query-related configuration, etc.

2. **Configuration Scripts** : Scripts or utilities that facilitate dynamic configuration of the application, such as theme configuration, language management, etc.

## <span id="content-example">Content Example</span>

Here is an example folder structure for "config":

```
📁config/
├── 📄 apiConfig.ts
├── 📄 appConfig.ts
├── 📄 queryClientConfig.ts
├── 📄 translationConfig.ts
```

## <span id="usage">🧑🏻‍💻Usage in the Project</span>

When you need to access a specific configuration in your code, import the appropriate file from the "config" folder. For example:

```javascript
// Example of using an API configuration
import { apiEndpoint } from '@Front/config/apiConfig';

// Example of using a react-query configuration
import { queryClient } from '@Front/config/queryConfig';

// Example of using a general application configuration
import { appName } from '@Front/config/appConfig';
```

## <span id="best-practice">🎖️ Best Practice</span>

Efficient configuration management is crucial for maintaining a clear and organized codebase. Follow these best practices for managing configuration files:

#### - Context-Specific Configuration

Separate configuration files based on different contexts, such as API configurations, QueryClient configurations, translations, etc.

This helps in better organization and ease of maintenance.

#### - File Naming Convention

Suffix configuration files with `Config` to enhance visibility and make it easier to identify configuration files at a glance.

---

**_By adopting these practices, you create a modular and organized approach to configuration management, making it simpler to locate and manage context-specific settings._**
