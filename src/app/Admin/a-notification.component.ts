import { Component, OnInit } from '@angular/core';
import { EducollabService } from '../educollab.service';

@Component({
  selector: 'app-a-notification',
  templateUrl: './a-notification.component.html',
  styles: []
})
export class ANotificationComponent implements OnInit {

  constructor(private q :EducollabService) { }

  ngOnInit() {
  }
  sendNoti(em) {
    this.q.sendnotification(em.value).subscribe();
  }
}
