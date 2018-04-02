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


  public perfil: Perfil = new Perfil() ; 

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
  
  }

//Evendo do click, da imagem para abrir o perfil
  abrirPerfil() {
    this.nav.push(CadastroPage);
  }
  
}
