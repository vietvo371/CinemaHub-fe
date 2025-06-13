export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  pagination?: PaginationMeta;
}

export interface ApiError {
  statusCode: number;
  message: string | string[];
  error: string;
} 