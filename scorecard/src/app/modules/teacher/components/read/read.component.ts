import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service'; 
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
 
})

export class ReadComponent implements OnInit {
  static gid: any;

  
  constructor(private service:ApiserviceService) { }
  readdata:any;
  ngOnInit(): void {
    this.getAllData();
  }
  
  deleteId(id:any)
  { 
    let gId=id;
    this.service.deleteData(id).subscribe((res)=>{
      console.log("deleted",gId);
      this.getAllData();
    })

    
    
  }
  
  editData(id:any)
  {
    ReadComponent.gid=id;
    // console.log(this.gid,"edit");
  }
  static value(): any {
   return this.gid;
  }

  getAllData()
  {
    this.service.getAllData().subscribe((res)=>{
      console.log(res);
      this.readdata=res;
    });
  }
}
 