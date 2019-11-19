import { Component, OnInit, OnDestroy } from '@angular/core';
import { EducollabService } from '../educollab.service';
declare var $;
import { Subject } from 'rxjs';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styles: []
})
export class ViewuserComponent implements OnInit, OnDestroy {
  users: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  idd: string;
  constructor(private q: EducollabService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8
    };
    this.q.getUser().subscribe(k => {
      this.users = k;
      this.dtTrigger.next();
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  todelete(id) {
    this.idd = id;
  }
  delete() {
    this.q.deleteUser(this.idd).subscribe(k => {
      this.ngOnInit();
    });
  }

}
