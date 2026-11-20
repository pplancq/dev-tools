import eslintReactKit from "@eslint-react/kit";
/* eslint-disable import-x/extensions */
import { destructuringAssignment } from "./destructuring-assignment.js";
import { jsxBooleanValue } from "./jsx-boolean-value.js";
import { noMultiComp } from "./no-multi-comp.js";
/* eslint-enable import-x/extensions */

export const pplancqReactPlugin = eslintReactKit()
  .use(jsxBooleanValue, "never")
  .use(destructuringAssignment, "always")
  .use(noMultiComp, { ignoreStateless: false })
  .getPlugin();
