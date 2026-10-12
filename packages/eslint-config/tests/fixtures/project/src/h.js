import { format } from "prettier";
import foo from "globals";
import b from "./f.jsx";
import "/abs/path";
import x from "!!raw-loader!./f.jsx";
const r = require("globals" + format);
define(["globals"], function () {});
