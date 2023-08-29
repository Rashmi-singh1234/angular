import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scorecard';
  showmenu=false;
  constructor(private service:ApiserviceService){}
  token=this.service.getToken();
  ngOnInit(): void {
    if(this.token)
    {
      this.showmenu=true
    }
    else
    {
      this.showmenu=false;
    }
  }

  
}
