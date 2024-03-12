import type { Json } from '@Front/types/api';
import { HEADERS, METHODS, MINE_TYPES } from './constant';

export type FetchApiError = Error & {
  code?: number;
  contentType?: MINE_TYPES;
};

type FetchApiProps = {
  path: string;
  method?: METHODS;
  data?: Json;
  headers?: HeadersInit;
};

export const fetchApi = async <T extends Json | string>({
  path,
  method = METHODS.get,
  data,
  headers = [],
}: FetchApiProps): Promise<T> => {
  const mergeHeaders = new Headers(headers);

  if (data) {
    mergeHeaders.append(HEADERS.contentType, MINE_TYPES.json);
  }

  const response = await fetch(path, {
    method,
    ...(data && { body: JSON.stringify(data) }),
    headers: mergeHeaders,
  });

  const content = await response.text();

  if (!response.ok) {
    const error: FetchApiError = new Error(content);
    error.code = response.status;
    error.contentType = (response.headers.get(HEADERS.contentType) as MINE_TYPES) ?? MINE_TYPES.text;

    throw error;
  }

  if ((response.headers.get(HEADERS.contentType) ?? '').includes('json')) {
    return JSON.parse(content) as T;
  }

  return content as T;
};
