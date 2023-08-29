import { Component, OnInit,Input } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service'; 
import { ReadComponent } from '../read/read.component';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private service:ApiserviceService) { }
  val=ReadComponent.value();
  
  ngOnInit(): void {
  }
  errmesg:any;
  sucessmsg:any;
  userForm = new FormGroup({
    
    'NAME':new FormControl('',Validators.required),
    'DOB':new FormControl('',Validators.required),
    'MARKS':new FormControl('',Validators.required),

  });
  userSubmit()
  { 
  
    // console.log(this.userForm.value.RNO);
    // console.log("edited",this.val);
    if(this.userForm.valid)
    {
    // console.log(this.userForm.value);
    console.log(this.userForm.value);
    this.service.editData(this.userForm.value,this.val).subscribe((res)=>{
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
