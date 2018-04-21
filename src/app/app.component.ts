import { CadastroPage } from './../pages/perfil/cadastro';
import { UsuarioService } from './../services/usuario-service';

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { Perfil } from './../models/perfil';
import { LoginPage } from './../pages/login/login';

@Component({
  templateUrl: 'app.html',
  providers: [UsuarioService]
})
export class MyApp {
  CadastroPage: any;
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;

  public perfil: Perfil = new Perfil();
  public pages = [];

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen, public alertCtrl: AlertController, public usuarioService: UsuarioService) {
    this.pages = [
      { title: 'Favoritos' },
      { title: 'Sair', component: LoginPage, icon: 'exit' }
    ]

  }

  openPage(page) {
    if (page.component == LoginPage) {
      this.showConfirm(page);
    } else {
      this.nav.push(page.component);
    }
  }

  showConfirm(page) {
    let prompt = this.alertCtrl.create({
      title: 'ATENÇÃO!',
      subTitle: 'Deseja Realmente sair!',
      buttons: [
        {
          text: 'Não',
          handler: () => {
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.nav.push(page.component);
          }
        }
      ]
    });
    prompt.present();

  }



  //Evendo de click, na imagem para abrir o perfil
  abrirPerfil() {
    this.nav.push(CadastroPage)
     
}


}
