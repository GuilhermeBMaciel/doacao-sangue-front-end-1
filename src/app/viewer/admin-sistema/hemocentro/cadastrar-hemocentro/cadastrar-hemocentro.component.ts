import { Component, OnInit, TemplateRef,   } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { hemocentro } from 'src/app/model/hemocentro';
import { tap, delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-cadastrar-hemocentro',
  templateUrl: './cadastrar-hemocentro.component.html',
  styleUrls: ['./cadastrar-hemocentro.component.css']
})
export class CadastrarHemocentroComponent implements OnInit {

  private readonly API = 'https://doacaodesangue.herokuapp.com/hemocentro';

  
  bairro: any = {
    nome: null,
  };
  
  municipio: any = {
    nome: null,
  };
  
  funcionamento: any = {
    horaAbertura: null,
    horaFechamento: null,
    diaFuncionamento: null,
  };
  
  
  endereco: any = {
    cep: null,
    numero:null,
    bairro: this.bairro,
    municipio: this.municipio,
  };

  modalRef: BsModalRef;
  hemocentro: any = {
    nome: null,
    cnes: null,
    email: null,
    senha: null,
    telefone: null,
    // status: null,
    funcionamento: this.funcionamento,
    endereco: this.endereco,
  };
  
  
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  
  constructor( 
    private modalService: BsModalService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(){
  } 

  hideModal(formulario){
    this.modalRef.hide();
    this.enviar(formulario);
  }
  
  justHide(){
    this.modalRef.hide();
  }
  
  list() {
    return this.httpClient.get<hemocentro[]>(this.API).
      pipe(
        delay(2000),
        tap(console.log) //para debugar, ver os erros
      );
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
    
  enviar(formulario){
    console.log(formulario.value);
    this.httpClient.post('https://doacaodesangue.herokuapp.com/hemocentro', formulario.value)
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados));
    alert('A doação foi confirmada.');
  }

  continuar(){}

}