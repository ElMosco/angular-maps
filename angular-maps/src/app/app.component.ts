import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';

  icon = {
    url: './assets/img/99%20-%20cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60

    }
  };
  icon1 = {
    url: './assets/img/shrek.ico',
    scaledSize: {
      width: 60,
      height: 60

    }
  };

  icon2 = {
    url: './assets/img/ciuchino.ico',
    scaledSize: {
      width: 60,
      height: 60

    }
  };

  icon3 = {
    url: './assets/img/fiona.ico',
    scaledSize: {
      width: 60,
      height: 60

    }
  };



  lat : number = 45.506738;
  lng : number = 9.190766;

  latCas : number = 45.508505;
  lngCas : number = 9.192683;

  latFrd : number = 44.900129;
  lngFrd : number = 8.208047;

  latCarr : number = 45.070895;
  lngCarr : number = 7.683833;

  triangle: Array<Point> =
  [
    {lng:9.1, lat:45.5},
    {lng:9.2, lat:45.6},
    {lng:9.3, lat:45.4}
  ]

  rectangle: Array<Point> =
  [
    {lng:10.1, lat:45.5},
    {lng:10.2, lat:45.6},
    {lng:10.3, lat:45.4},
    {lng:10.2, lat:45.3}
  ]

  color:string;
  colorRett:string;

  constructor(){}
  onClickRed() : boolean{
    this.color = "red"
    return false;
    }
  onClickBlue() : boolean{
    this.color = "blue"
    return false;
  }
  onClickGreen() : boolean{
    this.color = "green"
    return false;
  }

  onClickRettRed() : boolean{
    this.colorRett = "red"
    return false;
  }

  onClickRettBlue() : boolean{
    this.colorRett = "blue"
    return false;
  }

  onClickRettGreen() : boolean{
    this.colorRett = "green"
    return false;
  }
}
