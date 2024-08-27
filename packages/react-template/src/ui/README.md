# 📁 ui

The "ui" folder is a directory designed to group and organize reusable components.

We follow the concept of Atomic design to structure our components into "atoms," "molecules," "organisms," and "templates," ensuring consistent design and maximum reusability.

## 📑 Table of Contents

- [Why use a "ui" folder with Atomic Design](#folder-organization)
- [Structure of a "ui" folder according to Atomic Design](#structure)
- [Usage Example](#usage)
- [Best Practice](#best-practice)

## <span id="folder-organization">Why use a "ui" folder with Atomic Design?</span>

1. **Modularity** : Atomic Design divides components into levels of increasing complexity, making it easy to create reusable components at different levels.

2. **Visual Consistency** : By following the concept of Atomic Design, we can maintain visual consistency across our entire application by reusing atoms, molecules, and organisms.

3. **Productivity** : Creating prefab components in a "ui" folder speeds up development by reducing code duplication.

## <span id="structure">Structure of a "ui" folder according to Atomic Design</span>

The structure of a "ui" folder can follow the hierarchy of Atomic Design:

```
 📁 ui
├── 📁 atoms
│   ├──📁 Button
│   ├──📁 Input
│   ├── ...
├── 📁 molecules
│   ├── 📁 FormField
│   ├── 📁 SearchBar
│   ├── ...
├── 📁 organisms
│   ├── 📁 Header
│   ├── 📁 Footer
│   ├── ...
├── 📁 templates
│   ├── 📁 PageTemplate
│   ├── ...
```

Each level (atoms, molecules, organisms, templates) groups components based on their complexity. You can create subfolders to better organize the components.

## <span id="usage">🧑🏻‍💻Example of usage</span>

## Using components from Atomic Design

In our project, we use Atomic Design to organize our reusable components into levels ranging from "atoms" to "templates." Here's a concrete example of using these components in our application.

### Atom - "Button" Component

"Atoms" are basic components that don't depend on other components. In our "ui/atoms" folder, we have the "Button" component. It's a simple UI element that we can use as follows:

```javascript
import { Button } from '@Front/ui/atoms/Button';

export const MyComponent = () => {
  return (
    <div>
      <Button label="Cliquez-moi" />
      {/* ... other elements of the application */}
    </div>
  );
};
```

### Molecule - "SearchBar" Component

"Molecules" are more complex components that group atoms to form a functional set. In our "ui/molecules" folder, we have the "SearchBar" component that uses the atomic "Button":

```javascript
import { SearchBar } from '@Front/ui/molecules/SearchBar';

export const MyComponent = () => {
  return (
    <div>
      <SearchBar placeholder="Rechercher..." />
      {/* ... other elements of the application */}
    </div>
  );
};
```

The "SearchBar" component is a molecule because it combines the "Button" atom with other atoms.

### Organism - "Header" Component

"Organisms" are even more complex components that combine molecules and atoms to create self-contained parts of the UI. In our "ui/organisms" folder, we have the "Header" component that might include the molecular "SearchBar":

```javascript
import Header from '@Front/ui/organisms/Header';

export const MyComponent = () => {
  return (
    <div>
      <Header />
      {/* ... other elements of the application */}
    </div>
  );
};
```

The "Header" component is an organism because it combines the molecular "SearchBar" with other elements to form a self-contained part of the interface.

### Templates - "PageTemplate" Component

"Templates" are "skeleton" components that define the placement of elements using React's composition ability.

In our "ui/templates" folder, we have the "PageTemplate" component that defines the placement of the "topBar," "body," and "footer" to create a complete page:

```javascript
import PageTemplate from '@Front/ui/templates/PageTemplate';

export const MyComponent = () => {
  return <PageTemplate topBar={<div>TopBar</div>} body={<div>Boby</div>} footer={<div>Footer</div>} />;
};
```

The "PageTemplate" component is a template because it incorporates the "Header" organism and other elements to create a complete page.

## <span id="best-practice">🎖️ Best Practice</span>

When incorporating external component libraries, it is recommended to adhere to the following best practices for the organization of UI components:

#### - Export Components via the `ui` Directory

Always export UI components from the `ui` directory, even if they are sourced from an external component library.

This practice serves as a central point for managing component exports and facilitates handling bugs or breaking changes.

#### - Centralized Component Management

By exporting components through the ui directory, you establish a centralized location for managing changes or addressing issues related to external components.

In the event of a bug or breaking change, modifications can be made at a single location, preventing the need to update multiple parts of the codebase.

This approach contributes to better maintainability and ensures that updates to external components are efficiently managed.

---

**_By adopting this practice, you create a clear separation between your custom components and external components, simplifying maintenance and reducing the impact of changes from external dependencies._**
