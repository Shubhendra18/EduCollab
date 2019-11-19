import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-addsession',
  templateUrl: './addsession.component.html',
  styles: []
})
export class AddsessionComponent implements OnInit {
  trainer: any = [];
  constructor(private q: EducollabService) { }

  ngOnInit() {
    this.q.getTrainer().subscribe(k => {
      this.trainer = k;
    });
  }
  AddSession(tad) {
    this.q.addSession(tad.value).subscribe();
  }

}
