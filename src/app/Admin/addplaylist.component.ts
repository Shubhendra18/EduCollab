import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-addplaylist',
  templateUrl: './addplaylist.component.html',
  styles: []
})
export class AddplaylistComponent implements OnInit {
  trainer: any = [];
  constructor(private q : EducollabService) { }

  ngOnInit() {
    this.q.getTrainer().subscribe(k => {
      this.trainer = k;
    });
  }
  AddPlaylist(pd) {
    this.q.addPlaylist(pd.value).subscribe();
  }
}
