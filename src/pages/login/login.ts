import { Component } from '@angular/core';

import { Register } from '../register/register';
import { NavController ,LoadingController, AlertController,ToastController,ModalController,ViewController} from 'ionic-angular';
import { ImagePicker } from 'ionic-native';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {


	public user = {
		username : '',
		password : '',
    headface : 'assets/images/2.jpg'
	}

  constructor(public navCtrl: NavController ,
  			  public loadingCtrl: LoadingController,
  			  private alertCtrl: AlertController,
  			  private toastCtrl: ToastController,
  			  public modalCtrl: ModalController,
          public viewCtrl : ViewController) {

  }


  login(){
  	if(this.user.username==''){


 		//使用Toast控件进行提示
 		let toast = this.toastCtrl.create({
 			message: "您输入的用户名格式不正确!",
 			duration: 2000,
 			position: 'middle'
 			});
 		toast.present();

  	}else{
  		//alert(this.user.username);
  	    //console.log(this.user.password);
   	    let loading = this.loadingCtrl.create({
        	content: 'Please wait...',
          spinner: "dots",
          duration: 3000
        });

    	loading.present();

 		//真实的逻辑应该是：去请求登陆的API，返回结果后，进行loading
    //	setTimeout(() => {
     // 		loading.dismiss();
    	//}, 5000);
  	//}

    //这里模拟了登陆，如果密码为123456，登陆成功，进行相关的保存动作
        if(this.user.password == "123456"){
            var storage = window.localStorage;
            storage["username"] = this.user.username;
            storage["Logined"] = "true";
            setTimeout(() => {
             loading.dismiss();
             this.viewCtrl.dismiss(this.user.username);
            }, 1000);

          }
        else{
            setTimeout(() => {
             loading.dismiss();
            }, 1000);

            let toast = this.toastCtrl.create({
              message: "密码错误!",
              duration: 2000,
              position: 'bottom'
             });
            toast.present();

        }

   }

}

  //打开注册窗口
  openRegisterPage(){
  	let registerModal = this.modalCtrl.create(Register);
  	registerModal.present();
  }

  //用户上传头像图片
  uploadImage(){
    var opt = { maxImagesCount:1, width:100, height:100, quality:50 };
    ImagePicker.getPictures(opt).then((results)=>{
      for(var i=0;i<results.length;i++){
        this.user.headface = results[i];
      }
      });
  }

}
