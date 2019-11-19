import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tlogin',
  templateUrl: './tlogin.component.html',
  styles: []
})
export class TLoginComponent implements OnInit {

  user: [];
  constructor(private q: EducollabService, private route: Router) { }

  ngOnInit() {
  }
  signIn(tlm) {
    this.q.tloginUser(tlm.value).subscribe(k => {
      this.route.navigate(['/trainer']);
      localStorage.setItem("tdata", JSON.stringify(k));
    });
  }
  
}
