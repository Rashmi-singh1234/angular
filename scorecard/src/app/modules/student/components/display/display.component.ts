import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {


  constructor(private service:ApiserviceService) { }
  result:any;
  ngOnInit(): void {
    // console.log("display",SearchComponent.val);
    this.service.searchData(SearchComponent.val).subscribe((res)=>{
      console.log("display=>",res);
      this.result=res;
    })
  }
  


}
