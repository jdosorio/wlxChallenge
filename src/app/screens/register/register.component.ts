import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidator } from 'src/app/helpers/classes/matchPassword';
import { provinces,COUNTRIES } from 'src/app/data';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Token } from 'src/app/interfaces/global.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  countries:any = COUNTRIES;
  cities:any = [];
  provinces:any = provinces;

  constructor(public fm: FormBuilder, private authService:AuthService, private router: Router, private authenticationService:AuthenticationService) {

    this.registerForm = fm.group({
      names: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      surnames: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordValidate: new FormControl('', [Validators.required, Validators.minLength(6)]),
      terms: new FormControl(false, [Validators.requiredTrue])
    },
    {
        validator: CustomValidator('password','passwordValidate')
    });
  }

  ngOnInit(): void{
    this.authenticationService.isAuthenticated.subscribe( data => {
      if(data){
        this.router.navigateByUrl('/technologies');
      }
    });
  }

  get f(){
    return this.registerForm.controls;
  }

  onSubmit(){
    delete this.registerForm.value.passwordValidate;

    this.authService.register(this.registerForm.value).subscribe((resp) => {
      localStorage.setItem('token', resp.token);
      this.authenticationService.isAuthenticated.next(true);
      this.router.navigateByUrl('/technologies');
    })
  }

  changeCity(event:Event){
    this.cities = this.provinces[(<HTMLInputElement>event.target).value].provinces;
  }

}
