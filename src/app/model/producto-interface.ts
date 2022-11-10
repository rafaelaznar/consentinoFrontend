export interface ITipoproducto {
    id: number;
    nombre: string;
    productos: number;
}

export interface IProducto {
    id: number;
    codigo: string;
    nombre: string;
    existencias: number;
    precio: number;
    imagen: number;
    descuento: number;
    tipoproducto: ITipoproducto;
    carritos: number;
    compras: number;
}
