export type JsonValue = JsonObject | JsonArray | string | number | boolean | null;
export type JsonArray = Array<JsonValue>;
export type JsonObject = {
  [key: string]: JsonValue;
};
export type Json = JsonObject | JsonArray;
