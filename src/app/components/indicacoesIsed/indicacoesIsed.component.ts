import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';
import { Iindicacao } from './../../models/Iindicacao';
import { IndicacaoService } from './../../services/indicacao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-indicacoesIsed',
  templateUrl: './indicacoesIsed.component.html',
  styleUrls: ['./indicacoesIsed.component.css']
})
export class IndicacoesIsedComponent implements OnInit {

form: any  = FormGroup ;
indicacao = {} as Iindicacao;
VrStatus: string | undefined;
SvStatus = 'post';
public title: string | undefined;
public inconCless2: string ="";

get x():any {
  return this.form.controls;
}

  constructor(
    private FB: FormBuilder,
    private router: ActivatedRoute,
    private routers: Router,
    private indicacaoService :IndicacaoService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
 ) { }


 CarregarIndicacoes(): void{
  const indId = this.router.snapshot.paramMap.get('id');
  if(indId !== null){
    this.inconCless2 ="fas fa-edit";
    this.title = 'Editar Indicação';
    this.SvStatus ='put';
    this.indicacaoService.getIndicacaoById(Number(indId)).subscribe({
      next:(_indicacao: Iindicacao)=>{
        this.indicacao = {... _indicacao};
        this.form.patchValue(this.indicacao)

        if(this.indicacao.Status === 1){this.VrStatus = "INICIADA";}
        if(this.indicacao.Status === 2){this.VrStatus = "EM PROCESSO";}
        if(this.indicacao.Status === 2){this.VrStatus = "FINALIZADA";}
        this.spinner.show();

      },
      error:(error: any)=>{
        console.error(error);
        this.toastr.error('Error au caregar as indicações!','Error!')
      },
      complete:()=>{
        this.spinner.hide();
      }
    });
  }else{
    this.inconCless2 ="fa fa-file-text";
    this.title = 'Nova Indicação';
  }
 }

 ngOnInit() {
  this.CarregarIndicacoes();
  this.validation();
}



  public validation():void{
    this.form = this.FB.group({
        name:       [ '',Validators.required],
        cpf:        [ '',Validators.required],
        telefone:   [ '',Validators.required],
        email:      [ '',[Validators.required,Validators.email]],
        Status:     [ '',Validators.required],
      });
  }

  public resetForm():void{
    this.form.reset();
  }
  public cssValidar(formCampos: FormControl | AbstractControl):any{
    return {'is-invalid': formCampos.errors && formCampos.touched }
  }

  public salvarIndicacao():any{
    if(this.form.valid){

      if(this.SvStatus === 'post'){
        this.indicacao = {... this.form.value}

        this.indicacaoService.postIndicacao(this.indicacao).subscribe({
          next:()=>{
            this.spinner.show();
            this.toastr.success('Indicação salvo com sucesso','Sucesso!')
            this.routers.navigate(['/Indicacoes']);
          },
          error:(error: any)=>{
            console.error(error);
            this.toastr.error('Error ao salvara indicação.','Error!');
          },
          complete:()=>{
            this.spinner.hide()
          },
        });
      }else{

        this.indicacao = {id: this.indicacao.id, ... this.form.value}
        this.indicacaoService.putIndicacao(this.indicacao.id, this.indicacao ).subscribe({
          next:()=>{
            this.spinner.show();
            this.toastr.success('Indicação salvo com sucesso','Sucesso!')
          },
          error:(error: any)=>{
            console.error(error);
            this.toastr.error('Error ao salvara indicação.','Error!');
          },
          complete:()=>{
            this.spinner.hide()
          },
        })
      }
    }
  }
}
