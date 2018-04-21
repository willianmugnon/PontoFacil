import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export abstract class AbstractService<T>{

  protected protocolo: string = 'http';
  protected ip: string = 'localhost';
  protected porta: string = '8080';
  protected contextSistema: string = 'MugBus/rest/';
  protected url: string = this.protocolo + '://' + this.ip + ':' + this.porta + '/' + this.contextSistema; 
  protected urlWeb:string = '';

  constructor(protected http: Http) {
    this.urlWeb = this.url + this.getWebService();
  }

  public abstract getWebService():string;

  public findAll(): Observable<Array<T>> {
    return this.http.get(this.urlWeb).map(res => {
      return res.json();
    });
  }
 
  public findById(id: number): Observable<T> {
    return this.http.get(this.urlWeb + "/" + id).map(res => {
      return res.json();
    });
  }

  public remove(id: number): Observable<T> {
    return this.http.delete(this.urlWeb + "/" + id).map(res => {
      return res.json();
    });
  }

  public save(obj: T): Observable<T> {
    console.log(obj);
    return this.http.post(this.urlWeb + "/salvar", obj).map(res => {
      return res.json();
    });
  }



}
