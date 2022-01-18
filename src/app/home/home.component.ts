import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url)
  }

}
