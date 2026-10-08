export type ApiResponse<T> = {
  data: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
};

export type SchoolSummary = {
  id: string;
  name: string;
  shortName?: string | null;
  countryCode: string;
  currency: string;
  active: boolean;
};
