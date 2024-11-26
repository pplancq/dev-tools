# 📁 pages

The "pages" folder is designed to contain all the pages of our application. This structure facilitates organization, management, and navigation between the different views of our application. Additionally, if a page contains components related to its structure, we can create sub-folders to maintain order.

## 📑 Table of Contents

- [Why Use a "pages" Folder](#folder-organization)
- [Typical Structure of a "pages" Folder](#structure)
- [Usage Example](#usage)
- [Best Practice](#best-practice)

## <span id="folder-organization">Why Use a "pages" Folder?</span>

1. **Clear Organization** : By grouping all our pages in a single folder, we maintain a clear organization of our application, making it easy to find specific pages.

2. **Ease of Navigation** : A well-organized "pages" folder structure makes navigation between the views of our application easier.

3. **Reusability** : Components specific to a page can be reused in other pages, promoting code modularity.

## <span id="structure">Typical Structure of a "pages" Folder</span>

The structure of a "pages" folder can vary depending on the size of your application, but here is a typical structure you might adopt:

```
📁 Pages
├── 📁 Home
├── 📁 User
│   ├── 📁 UserProfile
├── 📁 Posts
│   ├── 📁 Article
├── 📁 Admin
```

In this structure, each page, such as "Home" or "User," is typically defined in its own file. If a page is complex and requires related components, you can create a sub-folder to maintain order related to the URL, as with "UserProfile" or "Article" in this example.

## <span id="usage">🧑🏻‍💻 Usage Example</span>

Suppose we have a "UserProfile" page with a complex structure:

```
📁 UserProfile
├── 📄 index.ts
├── 📄 UserProfile.tsx
├── 📄 routes.tsx
```

```javascript
// index.ts
export { userProfileRoutes } from './routes';

// routes.tsx (react-router v7)
import { RouteObject } from 'react-router';
import { UserProfile } from './UserProfile';

export const userProfileRoutes: RouteObject = {
  path: 'user-profile',
  element: <UserProfile />,
};

// UserProfile.tsx
export const UserProfile = () => {
  return (
    <div>
      UserProfile
      {/* Content of the UserProfile page */}
    </div>
  );
}
```

By using a "pages" folder and the ability to create sub-folders, we effectively organize our pages and their related components for better management of our application.

## <span id="best-practice">🎖️ Best Practice</span>

When working with page components, it is advisable to follow these best practices to maintain a clean and organized code structure:

#### - Minimize Business Logic

Limit the inclusion of business logic within page components.

Instead, delegate complex business logic to separate utility functions, services, or hooks. This keeps your page components focused on rendering and layout.

#### - Data Presence Control

Keep the logic within page components to a minimum, focusing primarily on controlling the presence of data.

If data is not available or meets certain conditions, consider redirecting to a dedicated error or not-found page.

---

**_By adopting these practices, you create page components that are focused on their primary responsibilities, leading to cleaner and more maintainable code._**
