import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: []
})
export class IndexComponent implements OnInit {

  constructor(private q : EducollabService) { }

  ngOnInit() {
  }
  register(rd) {
    console.log(rd.value);
    this.q.addReview(rd.value).subscribe();
  }
}
