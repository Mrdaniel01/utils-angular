import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    

  <app-ng-style></app-ng-style> 

  <app-css></app-css>

  <p>
    CSS sin scope 
  </p> 

  <app-clases></app-clases> 

  <p [appResaltado]="'orange'" >
    Parrafo para una directiva
  </p> 

  <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('contructor')
   }

  ngOnInit(): void {
    console.log('onInit')
  }
  ngOnChanges(){
    console.log('OnChanges')

  }
  ngDoCheck(){
    console.log('DoCheck')

  }
  ngAfterContentInit(){
    console.log('AfterContentInit')

  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked')

  }
  ngAfterViewInit(){
    console.log('AfterViewInit')

  }
  
  ngOnDestroy(){
    console.log('OnDestroy')

  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

}
