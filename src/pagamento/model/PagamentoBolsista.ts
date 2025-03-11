import type { IEntity } from "./generic/IEntity";
import AlocacaoBolsista from "./AlocacaoBolsista";

export interface IPagamentoBolsista extends IEntity {
    Id: string;
    Ordem: number;
    DataPagamento: string;
    ValorPago: number;
    Status: string;
    MesCompetencia: string;
    PagamentoBolsistaAlocacaoBolsistaId: string;
}


export default class PagamentoBolsista implements IPagamentoBolsista {

    constructor(
        public Id: string,
        public Ordem: number,
        public DataPagamento: string,
        public ValorPago: number,
        public MesCompetencia: string,
        public PagamentoBolsistaAlocacaoBolsistaId: string,
        public Status: string
    ) {
        this.Id = Id;
        this.Ordem = Ordem;
        this.DataPagamento = DataPagamento;
        this.ValorPago = ValorPago;
        this.Status = Status;
        this.MesCompetencia = MesCompetencia;
        this.PagamentoBolsistaAlocacaoBolsistaId = PagamentoBolsistaAlocacaoBolsistaId;
    }

}