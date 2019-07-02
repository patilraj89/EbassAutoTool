import { Component, OnInit } from '@angular/core';
import {HostService} from '../Host-Service/host-ser';
import { HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgForm } from '@angular/forms';
import {DatePipe} from '@angular/common';
import { ExcelService } from '../ExcelService/excel-service';
@Component({
  selector: 'app-corridor',
  templateUrl: './corridor.component.html',
  styleUrls: ['./corridor.component.css']
})
export class CorridorComponent implements OnInit {
  hostName;
  corData;
  currDate= new Date();
  latestDate;
  constructor(private hostSer:HostService,private http:HttpClient,private spinnerService: Ng4LoadingSpinnerService,
    private datePipe:DatePipe,private excellService:ExcelService) { }
  ngOnInit() {
    this.latestDate=this.datePipe.transform(this.currDate,'yyyy-MM-dd');
    console.log("latestDate=",this.latestDate)
    this.hostName=this.hostSer.getHost();
    console.log("Host Name=",this.hostName);
    this.spinnerService.show();
    this.http.get(this.hostName+"/getCorridor/"+this.latestDate).subscribe(data=>{
      this.corData=data;
      this.spinnerService.hide();
      console.log("Data=",this.corData);
    });
  }

  getCorridorData(form: NgForm) {
    //let selectedDt=this.datePipe.transform(form.controls['dt'].value,'yyyy-MM-dd');
    //console.log("Select Date=",selectedDt);
    //alert('getCorridor Called')    
    //console.log(form.value);
    if(form.controls['dt'].value==''){
      alert('Target Date SHould not be balnk');
      return;
    }else{
      this.hostName=this.hostSer.getHost();
      this.spinnerService.show();
      this.http.get(this.hostName+"/getCorridor/"+form.controls['dt'].value).subscribe(data=>{
        this.corData=data;
        this.spinnerService.hide();
        //console.log("Data=",this.corData);
      });
    }
    console.log('Date:' + form.controls['dt'].value);
  }

  exportAsXLSX():void {
    this.excellService.exportAsExcelFile(this.corData, 'Corridor');
  }

}
