import { Component, OnInit } from '@angular/core';
import { GetPubsService } from '../get-pubs.service';

class Publication {
  constructor (
    public title: string,
    public year: number | string,
    public authors: string,
    public doi: string,
    public journal: string,
    public authorsList: string[],
  ) {}
}

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  publications: Publication[] = [];

  constructor(private getPubsService: GetPubsService) { }
  
  ngOnInit(): void {
    this.getPubsService.getPublications().subscribe(response => {
      Object.assign(this.publications, response)
      let currentYear: number | string = NaN;
      for (let i = 0; i < this.publications.length; i++ ) {
        const authorsList = this.publications[i].authors.split(", ");
        for (let j = 0; j < authorsList.length - 1; j++) {
          authorsList[j] = authorsList[j] + ',';
        }
        authorsList[authorsList.length - 1] = authorsList[authorsList.length - 1] + '.';
        
        this.publications[i]['authorsList'] = authorsList;
        if (i !== 0 && this.publications[i].year === this.publications[i - 1].year) {
          this.publications[i].year = '';
          currentYear = this.publications[i - 1].year;
        } else if (this.publications[i].year === currentYear) {
          this.publications[i].year = '';
        }
      }
    });
  }

}
