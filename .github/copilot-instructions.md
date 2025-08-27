# Copilot Instructions

## Language Policy

All instructions and prompts in this repository must be written in English. This applies to:

- All rule and instruction files in `.github/instructions/`
- All prompt files in `.github/prompts/`
- All documentation and code comments intended for contributors

## Repository Configuration

**Default Branch:** `main`

## Development Code Generation

When working with TypeScript, React, and other technologies in this project, follow these instructions very carefully.

It is **EXTREMELY important that you follow the instructions in the rule files very carefully.**

### Workflow Implementation

**IMPORTANT:** Always follow these steps when implementing new features or making changes:

1. **Instruction Selection**: Consult any relevant instruction files listed in `.github/instructions/` and start by listing which rule files have been used to guide the implementation (e.g., `Instructions used: [a11y.instructions.md, vitest.instructions.md]`).

2. **Prompt Execution**: If the user requests execution of a specific prompt from `.github/prompts/`, read the prompt file and execute EXCLUSIVELY what it contains. Start by indicating which prompt is being used (e.g., `Prompt used: [open_pull_request.prompt.md]`).

3. **Error Resolution**: Fix any compiler warnings and errors after each file modification using the `get_errors` tool.

4. **Code Quality**: Ensure all changes follow the established coding standards and accessibility guidelines.

## Rule Priority

- When executing a prompt from `.github/prompts/`, the prompt instructions take precedence over general instructions
- For all other development work, strictly follow the instructions in `.github/instructions/`
- Always indicate which instructions or prompt is being used at the beginning of your response

## Error Handling and Testing Workflow

After every file modification:

1. Run `get_errors` to check for compilation issues
2. Fix any warnings or errors immediately

## Best Practices

- Always use English for code, documentation, tests, and comments
- Follow the established file and directory structure
- Maintain consistency with existing codebase patterns
