import { Perfil } from './../../models/perfil';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
@Component({

    selector:'cadastro-page',
    templateUrl:'cadastro.html'

})

export class CadastroPage{

    public perfil: Perfil;

   constructor(private camera: Camera, private nav: NavController, private action: ActionSheetController){
   this.perfil= new Perfil();

   }


salvar(perfilSalvar : Perfil){
    console.log(perfilSalvar);
}
//Metodo que faço as configurações aparecerem ao clicar na imagem para abrir a camera
public opcoes(){
    this.action.create({
        title: 'Escolha Uma Opção', 
        buttons:[
            {
                text:'Camera', icon:'camera',handler:() => {

                    const options: CameraOptions = {
                        quality: 100,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE,
                        sourceType: this.camera.PictureSourceType.CAMERA
                      }
                      
                      this.camera.getPicture(options).then((imageData) => {
                      
                       this.perfil.foto = 'data:image/jpeg;base64,' + imageData;
                      }, (err) => {
                       // Handle error
                      });

                }

            },
            {
                text:'Galeria', icon:'photo',handler:() => {
                    const options: CameraOptions = {
                        quality: 100,
                        destinationType: this.camera.DestinationType.DATA_URL,
                        encodingType: this.camera.EncodingType.JPEG,
                        mediaType: this.camera.MediaType.PICTURE,
                        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
                      }
                      
                      this.camera.getPicture(options).then((imageData) => {
                      
                       this.perfil.foto = 'data:image/jpeg;base64,' + imageData;
                      }, (err) => {
                      });
                }

            }
        ] 
    })
}

}