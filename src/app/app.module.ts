
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSpinnerModule } from "ngx-bootstrap-spinner";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndicacoesComponent } from './components/indicacoes/indicacoes.component';
import { NavComponent } from './shared/nav/nav.component';
import { IndicacaoService } from './services/indicacao.service';
import { DocumentacaoComponent } from './components/documentacao/documentacao.component';
import { HomeComponent } from './components/home/home.component';
import { TitleComponent } from './shared/title/title.component';
import { IndicacoesIsedComponent } from './components/indicacoesIsed/indicacoesIsed.component';

defineLocale('pt-br', ptBrLocale);

@NgModule({
  declarations: [
    AppComponent,
    IndicacoesComponent,
      NavComponent,
      DocumentacaoComponent,
      HomeComponent,
      TitleComponent,
      IndicacoesIsedComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CommonModule,
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true,
      iconClasses:{
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
      }
    },
    )
  ],
  providers: [IndicacaoService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
