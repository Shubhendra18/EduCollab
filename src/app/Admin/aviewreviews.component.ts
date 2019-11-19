import { Component, OnInit, OnDestroy } from '@angular/core';
import { EducollabService } from '../educollab.service';
declare var $;
import { Subject } from 'rxjs';
@Component({
  selector: 'app-aviewreviews',
  templateUrl: './aviewreviews.component.html',
  styles: []
})
export class AviewreviewsComponent implements OnInit, OnDestroy {
  users: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  constructor(private q: EducollabService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8
    };
    this.q.getReview().subscribe(k => {
      this.users = k;
      this.dtTrigger.next();
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
