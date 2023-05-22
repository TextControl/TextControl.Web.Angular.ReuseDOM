import { Component } from '@angular/core';
declare const attachEvents: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-editor-app';

  ngOnInit() {
    attachEvents();
  }

}