import { Component, OnInit } from '@angular/core';
import { OtherService } from '../other.service';
import { LoginService } from '../login.service';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  imgSrc: string;
  selectedImg: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup ({
   title : new FormControl('', Validators.required),
   text : new FormControl('', Validators.required),
   imageUrl : new FormControl('', Validators.required),
  })
  
  
  
  
  username:string;

  // directafterlogout:string="/admin";
  password:string;
  constructor(private afstorage: AngularFireStorage , private otherservice:OtherService, private loginservice:LoginService,
    private firebaseservice: FirebaseService ) { }
 
  login () {
 if (this.username == "it-center" && this.password=="ubgthbjy" ) {
  this.loginservice.login()
}
 
  }

  logout () {
this.loginservice.logout()
  }
  
  ngOnInit() {
    this.resetForm();
  }
  showPreview(event: any) {
    if(event.target.files && event.target.files[0]){
    const reader = new FileReader();
    reader.onload = (e:any) => this.imgSrc = e.target.result;
    reader.readAsDataURL(event.target.files[0]);
    this.selectedImg = event.target.files[0];
    }
    else{
    this.imgSrc = '/assets/img/placeholder.PNG';
    this.selectedImg = null;
    }
    }

    OnSubmit(formValue) {
      this.isSubmitted = true;
      if(this.formTemplate.valid) {
      var filePath = `news/${this.selectedImg.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.afstorage.ref(filePath);
      this.afstorage.upload(filePath, this.selectedImg).snapshotChanges().pipe(
      finalize(() => {
      fileRef.getDownloadURL().subscribe((url) => {
      formValue['imageUrl'] = url;
      this.firebaseservice.insertNews(formValue);
      this.resetForm();
      })
      })
      ).subscribe();
      
      
      }
      }
      
      get formControls() {
      return this.formTemplate['controls'];
      }
      
      resetForm() {
      this.formTemplate.reset();
      this.formTemplate.setValue({
      title:'',
      text:'',
      imageUrl:'',
      });
      this.imgSrc = '/assets/img/img-placeholder.png';
      this.selectedImg = null;
      this.isSubmitted = false;
      }
}
