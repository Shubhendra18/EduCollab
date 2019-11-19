import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usidebar',
  templateUrl: './usidebar.component.html',
  styles: []
})
export class USidebarComponent implements OnInit {

  nm: any = [];
  constructor(private route: Router) {
  }

  ngOnInit() {
    let k = JSON.parse(localStorage.getItem("udata"));
    this.nm = k;
  }
  logout() {
    window.localStorage.clear();
    this.route.navigate(['/index']);
  }
}
