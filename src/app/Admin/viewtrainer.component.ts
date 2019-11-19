import { Component, OnInit , OnDestroy} from '@angular/core';
import { EducollabService } from '../educollab.service';
declare var $;
import { Subject } from 'rxjs';
@Component({
  selector: 'app-viewtrainer',
  templateUrl: './viewtrainer.component.html',
  styles: []
})
export class ViewtrainerComponent implements OnInit {
  users: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  idd:string;
  constructor(private q: EducollabService) { }

  ngOnInit() {  
    this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 8
  };
  this.q.getTrainer().subscribe(k => {
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
    this.q.deleteTrainer(this.idd).subscribe(k => {
      this.ngOnInit();
    });
  }
}
