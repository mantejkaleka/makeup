import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  portfolioContent = [
    {
      name:'beauty', content:[
        { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/2c84009168a588dc2-1597138469948', flex: 1 },
        { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/d048a5de13b9af815-1597138469951', flex: 1 },
        { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/6c20621493ff86470-1646037558452', flex: 2 },
        { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/e6c00d09f454d15e0-1646037625845', flex: 1 },
        { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/dc548a8678d44d470-1646037646282', flex: 2 },
        { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/93776d9e130303cd0-1646038168631', flex: 2 },
        { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/2c84009168a588dc2-1597138469948', flex: 1 },
        { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/d048a5de13b9af815-1597138469951', flex: 3 },
        { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/6c20621493ff86470-1646037558452', flex: 1 }
      ]
    },
    // {
    //   name:'editorial', content:[
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/2c84009168a588dc2-1597138469948', flex: 1 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/d048a5de13b9af815-1597138469951', flex: 1 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/6c20621493ff86470-1646037558452', flex: 2 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/e6c00d09f454d15e0-1646037625845', flex: 1 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/dc548a8678d44d470-1646037646282', flex: 2 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/93776d9e130303cd0-1646038168631', flex: 2 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/2c84009168a588dc2-1597138469948', flex: 1 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/d048a5de13b9af815-1597138469951', flex: 3 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/6c20621493ff86470-1646037558452', flex: 1 }
    //   ]
    // },
    // {
    //   name:'bridal', content:[
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/2c84009168a588dc2-1597138469948', flex: 1 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/d048a5de13b9af815-1597138469951', flex: 1 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/6c20621493ff86470-1646037558452', flex: 2 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/e6c00d09f454d15e0-1646037625845', flex: 1 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/dc548a8678d44d470-1646037646282', flex: 2 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/93776d9e130303cd0-1646038168631', flex: 2 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/2c84009168a588dc2-1597138469948', flex: 1 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/d048a5de13b9af815-1597138469951', flex: 3 },
    //     { imgUrl: 'https://makeup-by-ellie.s3.amazonaws.com/6c20621493ff86470-1646037558452', flex: 1 }
    //   ]
    // }

  ]

  imgList = [
    'https://makeup-by-ellie.s3.amazonaws.com/e7d561835d2a98db12-1596573194744',
    'https://makeup-by-ellie.s3.amazonaws.com/8411320a42e5438c13-1596573194744',
    'https://makeup-by-ellie.s3.amazonaws.com/2b4efaed058a276714-1596573194744',
    'https://makeup-by-ellie.s3.amazonaws.com/658863852407ea9815-1596573194744',
    'https://makeup-by-ellie.s3.amazonaws.com/d8556d860482701016-1596573194745',
    'https://makeup-by-ellie.s3.amazonaws.com/41fe58d57f10abc40-1632457014467',
    'https://makeup-by-ellie.s3.amazonaws.com/228d978d3bf09c051-1632457014468',
    'https://makeup-by-ellie.s3.amazonaws.com/1a78ca3898aa1b912-1632457014469',
    'https://makeup-by-ellie.s3.amazonaws.com/7d4b702f039e482c3-1632457014470',
    'https://makeup-by-ellie.s3.amazonaws.com/f40e3d10841b87a54-1632457014470',
    'https://makeup-by-ellie.s3.amazonaws.com/2a486384076dbe175-1632457014471',
    'https://makeup-by-ellie.s3.amazonaws.com/b6577d9733e11b2b6-1632457014472',
    'https://makeup-by-ellie.s3.amazonaws.com/ab3e47c44712a9cf7-1632457014473',
    'https://makeup-by-ellie.s3.amazonaws.com/96fc541bdddd01c48-1632457014474',
    'https://makeup-by-ellie.s3.amazonaws.com/93bb4d1eb5e3c65010-1632457014475',
    'https://makeup-by-ellie.s3.amazonaws.com/f7328d8401c9082011-1632457014475',
    'https://makeup-by-ellie.s3.amazonaws.com/6b071f54f48acec13-1632457014476',
    'https://makeup-by-ellie.s3.amazonaws.com/b2f5f5e89795958114-1632457014477',
    'https://makeup-by-ellie.s3.amazonaws.com/4a220a0f4451f36c0-1642663671146'



  ]
  isBeauty = true;
  isBridal = false;
  isEditorial = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let element: any;
    element = document.getElementsByClassName('masonry-container');
    for (let i = 0; i < element.length; i++) {
      let imgHeight = element[i].querySelector('img').clientHeight;
      console.log('image height', imgHeight);
      element[i].style.height = imgHeight + 'px';
    }
  }

  fetchSection(sectionName: string): void {
    this.isBeauty = false;
    this.isBridal = false;
    this.isEditorial = false;

    if (sectionName === 'BEAUTY') {
      this.isBeauty = true;
    } if (sectionName === 'EDITORIAL') {
      this.isEditorial = true;
    } if (sectionName === 'BRIDAL') {
      this.isBridal = true;
    }
  }

}
