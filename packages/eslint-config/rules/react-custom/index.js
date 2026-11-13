import eslintReactKit from "@eslint-react/kit";
/* eslint-disable import/extensions */
import { destructuringAssignment } from "./destructuring-assignment.js";
import { jsxBooleanValue } from "./jsx-boolean-value.js";
import { noMultiComp } from "./no-multi-comp.js";
/* eslint-enable import/extensions */

export const pplancqReactPlugin = eslintReactKit()
  .use(jsxBooleanValue, "never")
  .use(destructuringAssignment, "always")
  .use(noMultiComp, { ignoreStateless: false })
  .getPlugin();
