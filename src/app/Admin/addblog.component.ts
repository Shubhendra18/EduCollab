import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styles: []
})
export class AddblogComponent implements OnInit {

  constructor(private q: EducollabService) { }

  ngOnInit() {
  }
  AddBlog(bd) {
    this.q.addBlog(bd.value).subscribe();
  }
}
