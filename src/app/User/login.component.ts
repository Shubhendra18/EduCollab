import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  user: [];
  constructor(private q: EducollabService, private route: Router) { }

  ngOnInit() {
  }
  signIn(lm) {
    this.q.loginUser(lm.value).subscribe(k => {
      this.route.navigate(['/user']);
      localStorage.setItem("udata", JSON.stringify(k));
    });
  }
  
}
