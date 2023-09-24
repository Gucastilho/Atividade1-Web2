import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  BebidasEspeciais = [
    { produto: 'Vodka Mango', preco: 'R$189.00', detalhes: 'A Absolut Vodka sabor manga é uma deliciosa e refrescante variação da clássica vodka Absolut.'},
    { produto: 'Vodka Absolute Pear', preco: 'R$199.00', detalhes: 'A Absolut Vodka sabor pera é uma variante encantadora e sofisticada da famosa vodka Absolut' },
    { produto: 'Vodka Stolichnaya Premium', preco: 'R$20.000', detalhes: 'A Vodka Stolichnaya Premium é uma vodka russa tradicionalmente produzida, conhecida por sua pureza e qualidade inigualáveis' },
  ];

  // Estrutura de dados para marcas, modelos e preços de celulares
  bebidas = [
    {
      marca: 'Gin',
      tipos: [
        { nome: 'Gin clássico', preco: 'R$ 149.99' },
        { nome: 'Gin cítrico', preco: 'R$169.99' },
        { nome: 'Gin floral', preco: 'R$199.99' },
        { nome: 'Herbal', preco: 'R$219.99' },

      ]
    },
    {
      marca: ' Whisky',
      tipos: [
        { nome: 'Jack Daniels', preco: 'R$299.99' },
        { nome: 'Singleton Of Dufftown ', preco: 'R$149.99' },
        { nome: 'Chivas Regal ', preco: 'R$249.99' },
        { nome: 'Johnnie Walker Red Label', preco: 'R$199.99' },

      ]
    },
    {
      marca: 'Vodka',
      tipos: [
        { nome: 'Absolut', preco: 'R$229.99' },
        { nome: 'Grey Goose', preco: 'R$299.99' },
        { nome: 'Ciroc ', preco: 'R$189.99' },
        { nome: 'Sminorff', preco: 'R$59.00' },

      ]
    },

  ];


  TipoMarcaSelecionados: any;
  TipoModeloSelecionado: any;
  tipos:any;

  updateListaTipos(){
    const TipoMarcaSelecionados = this.TipoMarcaSelecionados;
    if(TipoMarcaSelecionados) {
      this.tipos = TipoMarcaSelecionados.tipos;
    }else{
      this.tipos = [];
    }
  }
  



  DesejoUsuario: string = '';
  desejos: string[] = []; // Array para armazenar os desejos dos clientes

  AdicionarDesejo() {
    if (this.DesejoUsuario.trim() !== '') {
      this.desejos.push(this.DesejoUsuario);
      this.DesejoUsuario = '';
    }
  }
  LimparListaDesejo() {
    this.DesejoUsuario = ''; // Limpa o campo de entrada
  }

  LimparDesejos() {
    this.desejos = []; // Limpa a lista de desejos
  }

}


