import { HomePage } from './../home/home';
import { UsuarioService } from './../../services/usuario-service';
import { Perfil } from './../../models/perfil';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { CadastroPage } from "../perfil/cadastro";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [UsuarioService]
})
export class LoginPage {

    public perfil: Perfil = new Perfil();
    public formLogin: FormGroup;
    public usuario: any = {};
    public salvou = false;
    public typeCampoSenha = 'password';
    public senhaIcon = 'eye';
    public senhafocused: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public formBuilder: FormBuilder, public usuarioService: UsuarioService) {


        this.formLogin = this.formBuilder.group({
            login: [null, Validators.compose([Validators.required])],
            senha: [null, Validators.required]


        });
    }


    logar() {
        this.usuarioService.logar(this.perfil).subscribe((data: Perfil) => {
            if (data !== null) {
                localStorage.setItem('usuario', JSON.stringify(data));
                this.navCtrl.setRoot(HomePage)
            }

            //mensagem se o usuario estiver errado 


        });
    }

    

    //Icone de olho no campo senha ()
    public mostrarsenha = function () {
        if (this.typeCampoSenha == 'password') {
            this.typeCampoSenha = 'text';
            this.senhaIcon = 'eye-off'

        } else {
            this.typeCampoSenha = 'password';
            this.senhaIcon = 'eye'
        }
        this.focoInputSenha(true);
    }

    public focoInputSenha(value) {
        this.senhafocused = value;
    }


public abrirPreCadastro() {
    this.navCtrl.setRoot(CadastroPage);
  }

}
