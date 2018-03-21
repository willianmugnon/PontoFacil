import { Perfil } from './../../models/perfil';
import { Component } from '@angular/core';
@Component({

    selector:'cadastro-page',
    templateUrl:'cadastro.html'
    // styleUrls: ['cadastro.scss']

})

export class CadastroPage{

    public perfil: Perfil;

   constructor(){
   this.perfil= new Perfil();

   }


salvar(perfilSalvar : Perfil){
    console.log(perfilSalvar);
}

}