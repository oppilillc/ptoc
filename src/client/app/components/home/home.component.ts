// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../modules/core/index';
import { IAppState, getNames } from '../../modules/ngrx/index';
import * as nameList from '../../modules/sample/index';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  public names$: Observable<any>;
  public newName: string;

  public beginBalance: number;
  public accrualPeriod: number ;
  public accrualRate: number;
  public desiredDate: Date;
  public asOfDate: Date;
  public newBalance: number;
  public days: number;
  public ptoBalance: number;
  public desiredWeekends: Date[] = [];
  public asOfDays: Date[] = [];
  public selectedDesiredDay: number = 0; 
  public selectedAsOfDay: number = 0;
  

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {}

  ngOnInit() {
    this.newName = '';
    this.ptoBalance = 0;
    var today = new Date(); 
    today.setDate( today.getDate() + ( 6 - today.getDay() )); 
    this.desiredWeekends.push(new Date(today));
    var tempDay = new Date(today);
    for(var i=0; i<5;i++) {
    	tempDay.setDate(tempDay.getDate() + 7); 
	this.desiredWeekends.push(new Date(tempDay));
    }
    tempDay = new Date(today);
    console.log("tempDay:", tempDay);
    console.log("today:", today);
    this.selectedDesiredDay = 0;
    for(var i=0; i<5;i++) {
    	tempDay.setDate(tempDay.getDate() - 7); 
	this.asOfDays.push(new Date(tempDay));
    }
    this.asOfDays = this.asOfDays.slice().reverse();
    this.selectedAsOfDay = this.asOfDays.length -1; 
    console.log("selectedDesiredDay:", this.selectedDesiredDay);
    console.log("selectedAsOfDay:", this.selectedAsOfDay);
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  calculatePTO(): boolean {
  console.log("as of date:", this.asOfDate);
  console.log("desired date:", this.desiredDate);
    this.days = this.dateDiff(this.asOfDate, this.desiredDate);
    this.newBalance = (this.accrualRate * this.days / this.accrualPeriod);
    this.ptoBalance = +this.beginBalance + +this.newBalance;
    console.log("ptoBalance:", this.ptoBalance);

    return false;
  }
  desiredDaysChanged(picker) {
  	this.desiredDate = this.desiredWeekends[picker.selectedDesiredDay];
	this.calculatePTO();
  }
  asOfDaysChanged(asOfDayPicker) {
	console.log("81: selectedAsOfDay:", asOfDayPicker.selectedAsOfDay);
	console.log("this.asOfDate:", this.asOfDays[asOfDayPicker.selectedAsOfDay]);
  	this.asOfDate = this.asOfDays[asOfDayPicker.selectedAsOfDay];
	this.calculatePTO();
  }
  
  dateDiff(date1, date2){
    var d1 = new Date(date1); 
    var d2 = new Date(date2); 
    var milliseconds = +d2 - +d1; 
    var days = milliseconds / (86400000); 
    return days;
  }
 
  readAbout() {
    // Try this in the {N} app
    // {N} can use these animation options
    this.routerext.navigate(['/about'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
  }

