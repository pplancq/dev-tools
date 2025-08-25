# Git Commit Instructions

To ensure consistency and readability in commit messages, please follow these guidelines:

## Commit Convention

This project adopts the [Conventional Commits](https://www.conventionalcommits.org/) specification for all commit
messages to ensure a readable history, automate changelog generation, and facilitate continuous integration.

## Main Rules

1. **Follow Conventional Commits**

   Use the following structure for commit messages:

   ```
   <type>(scope): <description>

   [optional body]

   [optional footer(s)]
   ```

   - **type**: The type of change being committed. Use one of the following:
     - `feat`: A new feature
     - `fix`: A bug fix
     - `docs`: Documentation changes
     - `style`: Code style changes (formatting, missing semicolons, etc.)
     - `refactor`: Code refactoring (neither fixes a bug nor adds a feature)
     - `perf`: Performance improvements
     - `test`: Adding or updating tests
     - `build`: Changes that affect the build system or external dependencies (e.g., npm, webpack)
     - `ci`: Changes to CI configuration files and scripts (e.g., GitHub Actions, Travis, Circle)
     - `chore`: Maintenance tasks (e.g., build process, dependencies)
     - `revert`: Reverts a previous commit
   - **scope** (mandatory): the part of the code concerned. See "Scope Rules" below.
   - **description**: short imperative description, no initial capital letter, no period at the end
   - **first line must not exceed 72 characters**
   - **body** (optional): detailed description of the change, wrapped at 100 characters.
     **You can provide multiple bodies if needed, each separated by a blank line.**
   - **footer(s)** (optional: for breaking changes or issues, use `BREAKING CHANGE:` or `REF #<issue number>`

2. **Scope Rules**

   The scope is **MANDATORY** (OBLIGATOIRE) for every commit.  
   **Use `dev-tools` only as a last resort if none of the other scopes apply.**  
   Please strictly follow these rules:
   - If the commit is for `packages/commitlint-config`, use the scope: `commitlint-config`
   - If the commit is for `packages/create-react-app`, use the scope: `create-react-app`
   - If the commit is for `packages/eslint-config`, use the scope: `eslint-config`
   - If the commit is for `packages/postcss-config`, use the scope: `postcss-config`
   - If the commit is for `packages/prettier-config`, use the scope: `prettier-config`
   - If the commit is for `packages/react-template`, use the scope: `react-template`
   - If the commit is for `packages/semantic-release-config`, use the scope: `semantic-release-config`
   - If the commit is for `packages/stylelint-config`, use the scope: `stylelint-config`
   - For all other changes (and only if none of the above apply), use the scope: `dev-tools`

3. **Best Practices**
   - Use English for all commit messages.
   - One commit = one logical/unit change.
   - Use the scope to specify the affected layer or feature.
   - For breaking changes, add `!` after the type or scope and detail in the commit body.
   - Use the imperative mood in the description (e.g., "add" instead of "added" or "adds").
   - Avoid unnecessary punctuation at the end of the message.

4. **Examples**
   - Simple commit messages should follow the structure:
     - `feat(commitlint-config): add new commitlint rule`
     - `fix(create-react-app): fix template path resolution`
     - `feat(eslint-config): add new typescript rule`
     - `refactor(postcss-config): simplify config export`
     - `chore(prettier-config): update prettier version`
     - `docs(react-template): improve template documentation`
     - `feat(semantic-release-config): add github label support`
     - `fix(stylelint-config): correct css property order`
     - `chore(dev-tools): update dependencies`
     - `docs(dev-tools): update main readme`

   - More complex commit messages can include a body and footer:
     - ```
       feat(prettier-config): add support for new formatting options
       ```

     Add new options for formatting markdown files.

     BREAKING CHANGE: markdown formatting is now enabled by default.

     ````

      - ```
     refactor(react-template): improve component structure

     Refactor template to use functional components and hooks.

     REF #42
     ````

     - ```
       fix(eslint-config): fix rule for unused variables
       ```

     The rule was not catching all cases. Updated logic and tests.

     ```

     ```

## Note

By following these rules, we ensure that our commit history remains clean, consistent, and easy to understand.
