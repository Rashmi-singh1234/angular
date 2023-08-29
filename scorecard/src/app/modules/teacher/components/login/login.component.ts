import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errormessage:any;
  data:any;
  valid:any;
  constructor(private service:ApiserviceService,
    private router: Router) { }

  ngOnInit(): void {


  }

  signIn(user:any) 
  {
    
    this.service.loginData(user)
      .subscribe(
        res => {
          this.data=res;
          // val=this.data.res;
          var check=JSON.parse(this.data);
          if(!check.status)
          {
          this.valid=true;
          }
          
          if(check.status)
          {
            console.log(res);
            localStorage.setItem('token', res.token);
          this.router.navigate(['teacher/login/details']);
          }
          else
          {
            this.errormessage=check.msg;
            console.log(this.errormessage);
            this.router.navigate(['teacher/login']);}
          
        },
        err => console.log(err,this.errormessage)
      )
 
  }

}
