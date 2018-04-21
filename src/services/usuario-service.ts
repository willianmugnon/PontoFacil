import { AUTH } from './../app/app.constants';
import { Http } from '@angular/http';
import { Perfil } from './../models/perfil';
import { Injectable } from "@angular/core";
import { AbstractService } from "./abstract-service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class UsuarioService extends AbstractService<Perfil> {


    constructor(protected http: Http) {
        super(http);
    }

    public getWebService(): string {
        return 'usuario';
    }


    public logar(user: Perfil): Observable<Perfil> {
        let url = this.urlWeb + "/logar";
        return this.http.post(url, user).map(res => {
            if (res.text() !== null) {
                let json = res.json();
                console.log(json);
                AUTH.token = json.token;
                return json;
            }
            return null;
        });
    }   

//     public existeLogin(login: string, idUsuario:number): Observable<any> {
//     let obj = {
//       idUsuario: idUsuario,
//       login: login
//     }
//     JSON.stringify(obj);
//     return this.http.post(this.urlWeb + "/existelogin",obj );  
//   }

}