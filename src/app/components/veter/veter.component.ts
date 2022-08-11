import { Component, NgModule, OnInit, OnDestroy } from '@angular/core';
import { VeterService } from '../../services/veter/veter.service';
import { CustomDatePipe } from '../../custom.datepipe';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-veter',
  templateUrl: './veter.component.html',
  styleUrls: ['./veter.component.css']
})

export class VeterComponent implements OnInit , OnDestroy{

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
 
  @NgModule({
    declarations: [
      CustomDatePipe
    ]
  })

  allDatas: any = [];
  constructor(private service: VeterService) { }

  ngOnInit(): void {
    this.callData();
  }

  callData(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
    this.service
      .appointment()
      .subscribe((response: any) => {
        this.allDatas = response;
      });
      
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
