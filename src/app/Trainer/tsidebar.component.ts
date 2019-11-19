import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tsidebar',
  templateUrl: './tsidebar.component.html',
  styles: []
})
export class TSidebarComponent implements OnInit {

  tnm: any = [];
  constructor() {
  }

  ngOnInit() {
    let k =JSON.parse(localStorage.getItem("tdata"));
    this.tnm = k;
  }


}
