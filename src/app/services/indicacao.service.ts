import { Iindicacao } from './../models/Iindicacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicacaoService {
  EndUrl = 'http://127.0.0.1:8000/api/Indicacoes';

  constructor(private http: HttpClient) { }

  public getIndicacao(): Observable<Iindicacao[]>{
 return this.http.get<Iindicacao[]>(this.EndUrl);
  }
  public getIndicacaoByNome(name: string): Observable<Iindicacao[]>{
    return this.http.get<Iindicacao[]>(`${this.EndUrl}/${name}`)
  }
  public getIndicacaoById(id:number): Observable<Iindicacao>{
    return this.http.get<Iindicacao>(`${this.EndUrl}/${id}`)
  }

  public postIndicacao(indicao: Iindicacao): Observable<Iindicacao>{
    return this.http.post<Iindicacao>(this.EndUrl,indicao)
  }

  public putIndicacao(id:number, indicao: Iindicacao): Observable<Iindicacao>{
    return this.http.put<Iindicacao>(`${this.EndUrl}/${id}`,indicao)
  }

  public deleteIndicacao(id:number): Observable<any>{
    return this.http.delete<string>(`${this.EndUrl}/${id}`)
  }


}
