import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 public static val:any;
  constructor(private service:ApiserviceService) { }
  errmesg:any;
  sucessmsg:any;
  result=[];
  ngOnInit(): void {
  }


  userSubmit(rno:any,name:any)
  { 
  
    // console.log(this.userForm.value);
    // console.log("edited",this.val);
 
    
    console.log("value",rno);

      SearchComponent.val=rno;
    

    }

  }





