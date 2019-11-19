import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styles: []
})
export class SessionListComponent implements OnInit {

  sessions: any = [];
  idd: string;
  constructor(private q: EducollabService) { }

  ngOnInit() {
    this.q.getSession().subscribe(k => {
      this.sessions = k;
    });
  }
}
