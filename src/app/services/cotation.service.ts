import { ICotationModel, ICotationById, ICotationDraf } from './../interface/ICotation';
import { IStatus } from './../interface/IStatus';
import { IReason } from './../interface/IReason';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICotationFilter } from '../interface/IFilter';

@Injectable({
  providedIn: 'root'
})
export class CotationService {
  apiUrl: string = environment.noventaApi;

  constructor(private http: HttpClient) { }

  getStatus(): Observable<IStatus[]> {
    return this.http.get<any>(`${this.apiUrl}/Filtros/ListarStatus`)
      .pipe(map((res: any) => {
        return res.data.status;
      }))
  }

  getReason(): Observable<IReason[]> {
    return this.http.get<IReason[]>(`${this.apiUrl}/Filtros/ListarMotivo`)
      .pipe(map((res: any) => {
        return res.data.motivo;
      }));
  }

  getCotationByGuid(guid: string): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/Cotacao/ListarCotacaoGuid?Id=${guid}`, {})
      .pipe(map((data: any) => {
        return data.cotacao.id
      }));
  }

  getCotation(filter: ICotationFilter): Observable<ICotationModel> {
    return this.http.post<ICotationModel>(`${this.apiUrl}/Cotacao/ListarCotacaoFornecedor`, filter);
  }

  getCotationById(id: string): Observable<ICotationById> {
    return this.http.post<ICotationById>(`${this.apiUrl}/Cotacao/ListarCotacaoId?Id=${id}`, {});
  }

  putSaveDraft(cotation: ICotationDraf) {
    return this.http.post(`${this.apiUrl}/Cotacao/SalvarPreenchimentoCotacao`, cotation);
  }

  postUpdateCotation(cotation: ICotationDraf) {
    return this.http.post(`${this.apiUrl}/Cotacao/AtualizarCotacao`, cotation);
  }
}
