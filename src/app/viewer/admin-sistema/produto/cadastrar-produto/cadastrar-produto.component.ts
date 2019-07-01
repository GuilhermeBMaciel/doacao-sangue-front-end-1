import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable, empty, Subject } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { tap, delay } from 'rxjs/operators';

import { Produto } from 'src/app/model/produto';
import { element, by } from 'protractor';


@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class ProdutosListaComponent implements OnInit {
  private readonly API = 'https://doacaodesangue.herokuapp.com/produto';
  produtos$: Observable<Produto[]>;
  error$ = new Subject<boolean>();
  modalRef: BsModalRef;
  message: string;

  produto: any = {
    nome: null,
    quantidade: null, 
    descricao: null,
    valorunitario: null,
    categoria: null,
    tamanho: null,
    volume: null,
    material: null,
    genero: null,
    imagem: null,
  };

  //[{"id":4,"nome":"Sangue bom","quantidade":100,"descricao":"camisa boa","valorunitario":23,
  //"categoria":"Camisa","tamanho":"P","volume":"Não Possui","material":"Aluminio","genero":"Feminino"}]

  
  constructor(
    private httpClient: HttpClient,
    private modalService: BsModalService,

  ) { }

  ngOnInit() {
  }

    list() {
    return this.httpClient.get<Produto[]>(this.API).
      pipe(
        delay(2000),
        tap(console.log) //para debugar, ver os erros
      );
  }
  
  setCategoria(tipo) {
    this.produto.categoria = tipo;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  enviar(formulario){
    console.log(formulario.value);
    this.httpClient.post('https://doacaodesangue.herokuapp.com/produto', formulario.value)
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados));
    alert('A doação foi confirmada.');
  }
  
 
  cancelar(): void {
    this.modalRef.hide();
  }


}
