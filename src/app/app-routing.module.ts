import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'contactUs', component: ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
