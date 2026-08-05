import { users } from "@Mocks/fixtures/user";
import { http, HttpResponse } from "msw";

export const getUsers200 = http.get("*/users", () => HttpResponse.json(users));
