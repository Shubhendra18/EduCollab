import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tprofile',
  templateUrl: './tprofile.component.html',
  styles: []
})
export class TprofileComponent implements OnInit {
  tnm: any = [];
  constructor() { }

  ngOnInit() {
    let k =JSON.parse(localStorage.getItem("tdata"));
    this.tnm = k;
  }

}
