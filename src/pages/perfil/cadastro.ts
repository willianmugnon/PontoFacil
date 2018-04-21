import { LoginPage } from './../login/login';
import { UsuarioService } from './../../services/usuario-service';
import { Perfil } from './../../models/perfil';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ActionSheetController } from 'ionic-angular/components/action-sheet/action-sheet-controller';
import { FormBuilder, FormControl, FormGroup, Validator, Validators, } from '@angular/forms';
@Component({

    selector:'cadastro-page',
    templateUrl:'cadastro.html',
    providers: [UsuarioService]

})

export class CadastroPage{

    public perfil: Perfil = new Perfil();
    public form: FormGroup;

   constructor(private camera: Camera, private navCtrl: NavController, private action: ActionSheetController,
               public usuarioService: UsuarioService){
   this.perfil= new Perfil();
   this.buscarPerfil();
}


buscarPerfil(){
    this.perfil = JSON.parse(localStorage.getItem('usuario'));
    this.usuarioService.findById(this.perfil.id).subscribe((perfil:Perfil)=>{
         this.perfil = perfil;   
    });
}

// public existeLogin(login) {
//         if(login == undefined){
//             return
//         }
//         this.usuarioService.existeLogin(login, this.perfil.id).subscribe((res: any) => {
//             console.log(res);
//             if (res.status === 200) {
//                 if (res._body === 'true') {
//                     this.form.controls.login.setErrors({ loginJaExiste: 'Login já Existe'})
//                 }
//             }
//         }, err => {
//             console.log(err);
//         });
//     }


salvar(){
        this.usuarioService.save(this.perfil).subscribe((data : Perfil)=> {
             if (data !== null) {
                this.navCtrl.setRoot(LoginPage)
            }
        });
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