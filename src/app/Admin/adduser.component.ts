import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styles: []
})
export class AdduserComponent implements OnInit {

  constructor(private q: EducollabService) { }

  ngOnInit() {
  }
  register(ud) {
    console.log(ud.value);
    this.q.addUser(ud.value).subscribe();
  }
}
