import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() { }

  registerForm = new FormGroup({
    name: this.formBuilder.control('', Validators.required),
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    lastname: this.formBuilder.control('', Validators.required),
    fone: this.formBuilder.control('', Validators.required),
    address: this.formBuilder.control('', Validators.required),
    city: this.formBuilder.control('', Validators.required),
    country: this.formBuilder.control('', Validators.required),
    zip: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.required),
    resPassword: this.formBuilder.control('', Validators.required)
  }, RegisterComponent.equalsTo)

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }


    static equalsTo (group: AbstractControl): {[key:string]:boolean} {
      const password = group.get('password').value
      const resPassword = group.get('resPassword').value

      if(!password || !resPassword) {
        return null
      }

      if( password !== resPassword ) {
        return {passwordNotMatch: true}
      }

      return null

    }
}
