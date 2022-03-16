import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component ({
  selector : "nova-transferencia",
  templateUrl : "./nova-transferencia.component.html",
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferencia{

  valor: number;
  destino: number;

  @Output() aoTransferir = new EventEmitter<any>();
  // externiza  Evento-objeto = Classe<tipo>


  Transferir(){
    console.log("Solicitar nova transferencia!");
    /* console.log(`Valor: ${this.valor} \nDestino: ${this.destino}`); */
    const valorEmitir = {valor: this.valor, destino: this.destino}; // Pegamos o valor que queremos transmitir
    this.aoTransferir.emit(valorEmitir); // Transmitimos o valor
    // Emitindo o evento para propagamos o valor
    this.limparCampos(); 
  }

  limparCampos(){
    this.valor = 0;
    this. destino = 0;
  }
}
