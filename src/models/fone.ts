enum TipoFone{
    RESIDENCIAL = "Residencial",
    COMERCIAL = "Comercial",
    CELULAR = "Celular"
}

export default class Fone{
    constructor(
        public id: number,
        public numero: string,
        public tipo:  TipoFone
    ){
        this.id = id;
        this.numero = numero;
        this.tipo = tipo;
    }
}