import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drCarrot';
  faExternalLinkAlt = faExternalLinkAlt;
  constructor(public router: Router) {}
  
}
