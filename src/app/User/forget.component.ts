import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styles: []
})
export class ForgetComponent implements OnInit {

  constructor(private q: EducollabService) { }

  ngOnInit() {
  }
  forgetPass(fp) {
    this.q.forgetPassword(fp.value).subscribe();
  }
}
