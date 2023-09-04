import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo = 'https://makeupbyellie.netlify.app/static/media/mbe-new-logo.87dc6ad5.png';

  constructor() { }

  ngOnInit(): void {
  }

}
