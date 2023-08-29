import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service'; 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  errmesg:any;
  sucessmsg:any;
  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    'RNO':new FormControl('',Validators.required),
    'NAME':new FormControl('',Validators.required),
    'DOB':new FormControl('',Validators.required),
    'MARKS':new FormControl('',Validators.required),

  });
  userSubmit()
  {
    if(this.userForm.valid)
    {
    // console.log(this.userForm.value);
    this.service.createData(this.userForm.value).subscribe((res)=>{
      // console.log("values are inserted");
    })
    this.sucessmsg="sucess";
    }
    else{
      this.errmesg="error";
      console.log(this.errmesg);
    }

  }

  

}
