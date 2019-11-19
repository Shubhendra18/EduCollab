import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-uprofile',
  templateUrl: './uprofile.component.html',
  styles: []
})
export class UprofileComponent implements OnInit {
  nm: any = [];
 
  constructor(private q :EducollabService) {
  }

  ngOnInit() {
    let k =JSON.parse(localStorage.getItem("udata"));
    this.nm = k;
  }
 
  update(bd) {
    this.q.updateProfile(bd.value).subscribe(k => {
      localStorage.setItem("udata", JSON.stringify(k));
      this.ngOnInit();
    });
  }
}
