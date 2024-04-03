//Es abstracta porque no se va a instanciar, solo se va a heredar
export abstract class HttpAdapter {
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
}

//patron adaptador que permite adaptar la clase HttpAdapter a la clase AxiosAdapter

//toma una entrada y la adapta a una salida
