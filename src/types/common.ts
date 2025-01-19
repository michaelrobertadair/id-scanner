export type ErrorState = {
  code: string;
  message: string;
  details?: string;
};

export type AppStatus =
  | "initializing"
  | "ready"
  | "scanning"
  | "processing"
  | "complete"
  | "error";

export type Theme = "dark" | "light";
