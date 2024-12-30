import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faExternalLinkAlt, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drCarrot';
  faExternalLinkAlt = faExternalLinkAlt;
  faBars = faBars;
  loading = true;
  constructor(public router: Router) {}
  
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 4000);
  }
  showLinks() {
    let x: any = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}