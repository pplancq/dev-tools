# 📁 utils

The `utils` folder contains reusable utilities and functionalities used across different parts of the application. These utilities are designed to simplify the code, promote reusability, and enhance the maintainability of the project.

## 📑 Table of Contents

- [Usage Example](#usage)
- [Best Practice](#best-practice)

## <span id="usage">🧑🏻‍💻 Example of usage</span>

### `formatDate.ts`

The `formatDate.ts` file contains a utility function to consistently format dates throughout the application. You can use it to display dates in various components.

Example of usage:

```typescript
import { formatDate } from '@Front/utils/formatDate';

const formattedDate = formatDate(new Date());
```

### `apiUtils.ts`

The `apiUtils.ts` file contains utility functions to simplify API calls. You can find functions to handle HTTP requests, manipulate responses, and manage errors.

Example of usage:

```typescript
import { fetchData, handleResponse } from '@Front/utils/apiUtils';

async function fetchDataAndHandleError() {
  try {
    const data = await fetchData('https://api.example.com/data');
    const processedData = handleResponse(data);
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
  }
}
```

```typescript
import { formatDate, fetchData, handleResponse } from '@Front/utils';
// Use the utilities as needed
```

---

**_By using the "utils" folder, we organize our utilities efficiently for better reuse and simplified management._**

## <span id="best-practice">🎖️ Best Practice</span>

When dealing with utility functions, especially those sourced from external libraries like `date-fns`, it is advisable to follow these best practices for maintaining a structured codebase:

#### - Export Libraries from the `utils` Directory

Always export utility libraries, such as `date-fns` or others, from the `utils` directory. This practice provides a central location for managing library imports and ensures consistent usage throughout the codebase.

#### - Centralized Library Management

Exporting libraries through the `utils` directory establishes a centralized point for managing changes or updates to external libraries.

In case of updates, bug fixes, or changes in functionality, modifications can be made at a single location, preventing the need to update multiple parts of the codebase.

This approach contributes to better maintainability and ensures that updates to external libraries are efficiently handled.

---

**_By adhering to this practice, you create a clear separation between custom utility functions and external libraries, making your codebase more organized and reducing the impact of changes from external dependencies._**
