import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  DataService
} from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = "";
  email = "";
  pswd = "";


  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) {}
  //Registration model
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-z A-Z 0-9 @]*')]],
    email: ['', [Validators.required, Validators.pattern('[a-z A-Z 0-9 @.]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-z A-Z 0-9 !@#]*')]]
  })

  //control pass to ts to html file

  ngOnInit(): void {}
  register() {
    console.log(this.registerForm);

    //alert("register clicked")
  
    var uname = this.registerForm.value.uname;
    var email = this.registerForm.value.email;
    var pswd = this.registerForm.value.pswd;
    if (this.registerForm.valid) {

      console.log(this.registerForm.get('uname')?.errors)
      this.ds.register(email,uname,pswd)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('')
      },
      result=>{
        alert(result.error.message);
      })

  }
}
}