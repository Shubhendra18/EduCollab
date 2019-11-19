import { Pipe, PipeTransform } from '@angular/core';
import {  DomSanitizer} from '@angular/platform-browser';
@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
constructor(private q:DomSanitizer){}
transform(videoPath: string): any {
  return this.q.bypassSecurityTrustResourceUrl(videoPath);
}
}
