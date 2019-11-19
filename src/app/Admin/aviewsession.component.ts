import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-aviewsession',
  templateUrl: './aviewsession.component.html',
  styles: []
})
export class AviewsessionComponent implements OnInit {
  sessions: any = [];
  idd: string;
  constructor(private q: EducollabService) { }

  ngOnInit() {
    this.q.getSession().subscribe(k => {
      this.sessions = k;
    });
  }
  todelete(id) {
    this.idd = id;
  }
  delete() {
    this.q.deleteSession(this.idd).subscribe(k => {
      this.ngOnInit();
    });
  }
}
