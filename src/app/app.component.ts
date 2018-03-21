import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Perfil } from './../models/perfil';
import { CadastroPage } from "../pages/perfil/cadastro";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  public perfil: Perfil = new Perfil() ; 

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // usado para um exemplo de ngFor e navegação
    this.pages = [
      { title: 'Home', component: HomePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Ok, então a plataforma está pronta e os nossos plugins estão disponíveis.
      // Aqui você pode fazer qualquer coisa nativa de nível superior que você possa precisar.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
//Evendo do click, da imagem para abrir o perfil
  abrirPerfil() {
    this.nav.push(CadastroPage);
  }
  
}
