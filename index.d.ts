declare module '@apiverve/textstyler' {
  export interface textstylerOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface textstylerResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class textstylerWrapper {
    constructor(options: textstylerOptions);

    execute(callback: (error: any, data: textstylerResponse | null) => void): Promise<textstylerResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: textstylerResponse | null) => void): Promise<textstylerResponse>;
    execute(query?: Record<string, any>): Promise<textstylerResponse>;
  }
}
