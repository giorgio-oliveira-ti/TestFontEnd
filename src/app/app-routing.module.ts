import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndicacoesComponent} from './components/indicacoes/indicacoes.component'
import { HomeComponent } from './components/home/home.component'
import { DocumentacaoComponent } from './components/documentacao/documentacao.component'
import { IndicacoesIsedComponent } from './components/indicacoesIsed/indicacoesIsed.component';


const routes: Routes = [
  {path: 'Indicacoes', component: IndicacoesComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Doc', component: DocumentacaoComponent},
  {path: 'Ised/:id', component: IndicacoesIsedComponent},
  {path: 'Ised', component: IndicacoesIsedComponent},
  {path: '', redirectTo: 'Home',pathMatch: 'full'},
  {path: '**', redirectTo: 'Home',pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
