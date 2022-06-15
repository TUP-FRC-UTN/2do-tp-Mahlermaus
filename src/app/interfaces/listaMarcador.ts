import { listaMarcadores } from "../interfaces/listaMarcadores"

export interface listaMarcador {
    listaMarcadores: listaMarcadores[];
    ok: boolean;
    error: string;
    statusCode: string;

}