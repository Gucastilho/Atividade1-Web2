import { Component } from '@angular/core';
import { ServerService } from '../server.service';
import {valores, valoresPost} from './respostaModel'

@Component({
  selector: 'app-conecta',
  templateUrl: './conecta.component.html',
  styleUrls: ['./conecta.component.css'],
})
export class ConectaComponent {
  //criar um construtor para chamar o serviço
  //ServerService é o serviço externo - link do Reqres
  constructor(public servico: ServerService) {}
  val: valores[] = []; //criar zerado
  client: valoresPost = {} as valoresPost; //zerado, mas do tipo valoresPost
  clientResult: valoresPost = {} as valoresPost;
  vItemNome : string = "";
  vItemJob : string = "";


  chamadaBack() {
    this.val = [];
    this.clientResult = {} as valoresPost;
    //serviço chama o ServerService e assina o serviço e ja espera a resposta
    this.servico.getTodosUsuarios().subscribe((resposta: any) => {
      console.log(resposta.data);
      this.val = resposta.data;
      console.log(this.val);
    });
  }

  chamadaBackPost() {
    this.val = [];
    this.clientResult = {} as valoresPost;
    this.client = { name: this.vItemNome, job: this.vItemJob };
    this.servico.postUsuario(this.client).subscribe((resp: any) => {
      this.clientResult = resp;
      console.log(this.clientResult);
    });
  }
}
