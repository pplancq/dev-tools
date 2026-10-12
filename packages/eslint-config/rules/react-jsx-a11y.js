import jsxA11yPlugin from "eslint-plugin-jsx-a11y-x";

export const reactJsxA11yRules = {
  plugins: {
    "jsx-a11y": jsxA11yPlugin,
  },
  rules: {
    // eslint-plugin-jsx-a11y-x https://github.com/eslint-community/eslint-plugin-jsx-a11y-x
    // The plugin is registered under the "jsx-a11y" namespace to stay compatible with eslint-plugin-jsx-a11y rule names.

    // Enforce all elements that require alternative text have meaningful information to relay back to end user.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/alt-text.md
    "jsx-a11y/alt-text": [
      "error",
      {
        elements: ["img", "object", "area", 'input[type="image"]'],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': [],
      },
    ],

    // Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/anchor-ambiguous-text.md
    "jsx-a11y/anchor-ambiguous-text": "off",

    // Enforce all anchors to contain accessible content.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/anchor-has-content.md
    "jsx-a11y/anchor-has-content": ["error", { components: [] }],

    // Enforce all anchors are valid, navigable elements.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/anchor-is-valid.md
    "jsx-a11y/anchor-is-valid": [
      "error",
      { components: ["Link"], specialLink: ["to"], aspects: ["noHref", "invalidHref", "preferButton"] },
    ],

    // Enforce elements with `aria-activedescendant` are tabbable.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",

    // Enforce all `aria-*` props are valid.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/aria-props.md
    "jsx-a11y/aria-props": "error",

    // Enforce ARIA state and property values are valid.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/aria-proptypes.md
    "jsx-a11y/aria-proptypes": "error",

    // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/aria-role.md
    "jsx-a11y/aria-role": ["error", { ignoreNonDOM: false }],

    // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/aria-unsupported-elements.md
    "jsx-a11y/aria-unsupported-elements": "error",

    // Enforce that `autocomplete` attributes are used correctly.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/autocomplete-valid.md
    "jsx-a11y/autocomplete-valid": ["off", { inputComponents: [] }],

    // Enforce a clickable non-interactive element has at least one keyboard event listener.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/click-events-have-key-events.md
    "jsx-a11y/click-events-have-key-events": "error",

    // Enforce that a control (an interactive element) has a text label.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/control-has-associated-label.md
    "jsx-a11y/control-has-associated-label": [
      "error",
      {
        labelAttributes: ["label"],
        controlComponents: [],
        ignoreElements: ["audio", "canvas", "embed", "input", "textarea", "tr", "video"],
        ignoreRoles: [
          "grid",
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "row",
          "tablist",
          "toolbar",
          "tree",
          "treegrid",
        ],
        depth: 5,
      },
    ],

    // Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/heading-has-content.md
    "jsx-a11y/heading-has-content": ["error", { components: [""] }],

    // Enforce `<html>` element has `lang` prop.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/html-has-lang.md
    "jsx-a11y/html-has-lang": "error",

    // Enforce `iframe` elements have a `title` attribute.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/iframe-has-title.md
    "jsx-a11y/iframe-has-title": "error",

    // Enforce `<img>` `alt` prop does not contain the word "image", "picture", or "photo".
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/img-redundant-alt.md
    "jsx-a11y/img-redundant-alt": "error",

    // Enforce that elements with interactive handlers like `onClick` must be focusable.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/interactive-supports-focus.md
    "jsx-a11y/interactive-supports-focus": "error",

    // Enforce that a `label` tag has a text label and an associated control.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/label-has-associated-control.md
    "jsx-a11y/label-has-associated-control": [
      "error",
      { labelComponents: [], labelAttributes: [], controlComponents: [], assert: "both", depth: 25 },
    ],

    // Enforce `lang` attribute has a valid value.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/lang.md
    "jsx-a11y/lang": "error",

    // Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/media-has-caption.md
    "jsx-a11y/media-has-caption": ["error", { audio: [], video: [], track: [] }],

    // Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/mouse-events-have-key-events.md
    "jsx-a11y/mouse-events-have-key-events": "error",

    // Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-access-key.md
    "jsx-a11y/no-access-key": "error",

    // Disallow `aria-hidden="true"` from being set on focusable elements.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-aria-hidden-on-focusable.md
    "jsx-a11y/no-aria-hidden-on-focusable": "off",

    // Enforce `autoFocus` prop is not used.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-autofocus.md
    "jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],

    // Enforce distracting elements are not used.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-distracting-elements.md
    "jsx-a11y/no-distracting-elements": ["error", { elements: ["marquee", "blink"] }],

    // Interactive elements should not be assigned non-interactive roles.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
    "jsx-a11y/no-interactive-element-to-noninteractive-role": ["error", { tr: ["none", "presentation"] }],

    // Non-interactive elements should not be assigned mouse or keyboard event listeners.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-noninteractive-element-interactions.md
    "jsx-a11y/no-noninteractive-element-interactions": [
      "error",
      { handlers: ["onClick", "onMouseDown", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"] },
    ],

    // Non-interactive elements should not be assigned interactive roles.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
      "error",
      {
        ul: ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
        ol: ["listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid"],
        li: ["menuitem", "option", "row", "tab", "treeitem"],
        table: ["grid"],
        td: ["gridcell"],
      },
    ],

    // `tabIndex` should only be declared on interactive elements.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-noninteractive-tabindex.md
    "jsx-a11y/no-noninteractive-tabindex": ["error", { tags: [], roles: ["tabpanel"] }],

    // Enforce explicit `role` property is not the same as implicit/default `role` property on element.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-redundant-roles.md
    "jsx-a11y/no-redundant-roles": "error",

    // Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the `role` attribute.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/no-static-element-interactions.md
    "jsx-a11y/no-static-element-interactions": [
      "error",
      { handlers: ["onClick", "onMouseDown", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"] },
    ],

    // Enforces using semantic DOM elements over the ARIA role property.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/prefer-tag-over-role.md
    "jsx-a11y/prefer-tag-over-role": "off",

    // Enforce that elements with ARIA roles must have all required attributes for that `role`.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/role-has-required-aria-props.md
    "jsx-a11y/role-has-required-aria-props": "error",

    // Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/role-supports-aria-props.md
    "jsx-a11y/role-supports-aria-props": "error",

    // Enforce `scope` prop is only used on `<th>` elements.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/scope.md
    "jsx-a11y/scope": "error",

    // Enforce `tabIndex` value is not greater than zero.
    // https://github.com/eslint-community/eslint-plugin-jsx-a11y-x/blob/main/docs/rules/tabindex-no-positive.md
    "jsx-a11y/tabindex-no-positive": "error",
  },
};
