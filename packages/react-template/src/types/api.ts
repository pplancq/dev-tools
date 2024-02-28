export type JsonValue = JsonObjet | JsonArray | string | number | boolean | null;
export type JsonArray = Array<JsonValue>;
export type JsonObjet = {
  [key: string]: JsonValue;
};
export type Json = JsonObjet | JsonArray;
