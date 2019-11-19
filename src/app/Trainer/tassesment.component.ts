import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-tassesment',
  templateUrl: './tassesment.component.html',
  styles: []
})
export class TassesmentComponent implements OnInit {
  user: any = [];
  Qualification = "0";
  Sname = "0";
  constructor(private q: EducollabService) { }

  ngOnInit() {

  }
  onSelect(value) {
    this.q.getUserbycourse(value).subscribe(k => {
      this.user = k;
    });
  }
  AddAssessment(tad) {
    this.q.addtAssessment(tad.value).subscribe();
  }
}
