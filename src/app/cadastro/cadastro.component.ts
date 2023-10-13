import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {


  showPassword() {
    let pwd = document.getElementById("pwd")! as HTMLInputElement;
    if (pwd.type === 'password') {
      pwd.type = 'text';
    } else if(pwd.type === "text") {
      pwd.type = 'password';
    }else {
      pwd.type = 'password';
    }
  }

}




