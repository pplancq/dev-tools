import type { Json } from '@Front/types/api';
import { Header, Method, MimeType } from './constant';

export type FetchApiError = Error & {
  code?: number;
};

type FetchApiProps = {
  path: string;
  method?: Method;
  data?: Json;
  headers?: HeadersInit;
};

export const fetchApi = async <T extends Json | string>({
  path,
  method = Method.get,
  data,
  headers = [],
}: FetchApiProps): Promise<T> => {
  const mergeHeaders = new Headers(headers);

  if (data) {
    mergeHeaders.append(Header.contentType, MimeType.json);
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

    throw error;
  }

  if ((response.headers.get(Header.contentType) ?? '').includes('json')) {
    return JSON.parse(content) as T;
  }

  return content as T;
};
