import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-aviewblog',
  templateUrl: './aviewblog.component.html',
  styles: []
})
export class AviewblogComponent implements OnInit {
  blogs: any = [];
  constructor(private q :EducollabService) {
    this.q.getBlog().subscribe(k => {
      this.blogs = k;
    });
  }

  ngOnInit() {
  }

}
