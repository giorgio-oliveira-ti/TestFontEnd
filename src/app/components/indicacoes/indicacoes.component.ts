import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-bootstrap-spinner";
import { Iindicacao } from './../../models/Iindicacao';
import { IndicacaoService } from './../../services/indicacao.service';



@Component({
  selector: 'app-indicacoes',
  templateUrl: './indicacoes.component.html',
  styleUrls: ['./indicacoes.component.css']
})
export class IndicacoesComponent implements OnInit {

  modalRef?: BsModalRef;
  public indicacoes: any = [];
  public indicacoesFiltrados: Iindicacao[] = [];

  private _filtroLista: string = "";

  public get filtroLista(): string{
    return this._filtroLista;
  }
  public set filtroLista(value: string ){
    this._filtroLista = value;
    this.indicacoesFiltrados = this.filtroLista ? this.filtroindicacoes(this.filtroLista): this.indicacoes;
  }

  public filtroindicacoes(filtroPor: string):Iindicacao[] {
    filtroPor = filtroPor.toLocaleLowerCase();
    return this.indicacoes.filter(
      (indicacao: {name: string, cpf:string, telefone:string, email: string }) => indicacao.name.toLocaleLowerCase().indexOf(filtroPor) !== -1 ||
      indicacao.cpf.toLocaleLowerCase().indexOf(filtroPor) !== -1 ||
      indicacao.telefone.toLocaleLowerCase().indexOf(filtroPor) !== -1 ||
      indicacao.email.toLocaleLowerCase().indexOf(filtroPor) !== -1
    );
  }



  constructor(
    private indicacaoService: IndicacaoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  public ngOnInit() {
    this.spinner.show();
    this.getindicacoes();
  }

  public getindicacoes(): void{
    this.indicacaoService.getIndicacao().subscribe({
      next:(_response: Iindicacao[])=>{
        this.indicacoes = _response;
    this.indicacoesFiltrados = this.indicacoes;
    this.spinner.show();

      },
      error:(error)=>{
        this.toastr.error('Caragar as indicações', 'Error');
        console.log(error)
      },
      complete:()=>{this.spinner.hide()},
    });
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
 this.modalRef?.hide();
 this.toastr.success('Sucesso!', 'Excluido');
  }

  decline(): void {
    this.modalRef?.hide();
  }

}
