import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-addtrainer',
  templateUrl: './addtrainer.component.html',
  styles: []
})
export class AddtrainerComponent implements OnInit {

  constructor(private q : EducollabService) { }

  ngOnInit() {
  }
  register(td) {
    console.log(td.value);
    this.q.addTrainer(td.value).subscribe();
  }
}
