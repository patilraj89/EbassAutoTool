import { Component, OnInit } from '@angular/core';
import {HostService} from '../Host-Service/host-ser';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  constructor(private hostSer:HostService) { }

  ngOnInit() {
  }

}
