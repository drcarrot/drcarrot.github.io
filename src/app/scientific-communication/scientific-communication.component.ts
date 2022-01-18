import { Component, OnInit } from '@angular/core';

import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scientific-communication',
  templateUrl: './scientific-communication.component.html',
  styleUrls: ['./scientific-communication.component.scss']
})
export class ScientificCommunicationComponent implements OnInit {
  
  faExternalLinkAlt = faExternalLinkAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
