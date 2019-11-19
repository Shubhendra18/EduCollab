import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-viewplaylist',
  templateUrl: './viewplaylist.component.html',
  styles: []
})
export class ViewplaylistComponent implements OnInit {
  playlist: any = [];
  idd:string;
  constructor(private q: EducollabService) { }

  ngOnInit() {
    this.q.getPlaylist().subscribe(k => {
      this.playlist = k;
    });
  }
  todelete(id) {
    this.idd = id;
  }
  delete() {
    this.q.deletePlaylist(this.idd).subscribe(k => {
      this.ngOnInit();
    });
  }
}
