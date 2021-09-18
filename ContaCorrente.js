import { Cliente } from './Cliente.js';
export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    } //só pode ser atribuído ao "cliente" uma instancia de Cliente, evitando que sejam atribuídos valores indesejados.

    get cliente() {
        return this._cliente;
    }

    _saldo = 0;

    get saldo() {
        return this._saldo
    } //somente leitura. Não conseguimos atribuir um valor a ele diretamente.

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