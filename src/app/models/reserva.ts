import { Comidas } from './comidas';

export interface Reserva{
    id: string,
    comida: Comidas[],
    fecha: string

}