import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {BoxResult, Response} from "@app/core/models/response";

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {

  private readonly urlPrediction: string = 'http://127.0.0.1:6020/api/v1/prediction'

  constructor(private _http: HttpClient) {
  }

  public getPredictions(file: FormData): Observable<Response<BoxResult>> {
    return this._http.post<Response<BoxResult>>(this.urlPrediction, file).pipe(map(res => res));
  }
}
