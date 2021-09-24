import { Cliente } from './Cliente.js';
export class ContaCorrente {
    static numeroDeContas = 0; //"static" conta um todo, e não só de uma instância específica.

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo
    }
    
    //Só pode ser atribuído ao "cliente" uma instancia de Cliente, evitando que sejam atribuídos valores indesejados.
    //Resumindo, "set" permite atribuição desde que seja um instância específica.
    //"Get" permite leitura, mas não novas atribuições.

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor < 0) {
            return;
        }
        this._saldo += valor;
    } 
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}