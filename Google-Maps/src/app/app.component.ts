import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Google-Maps';

  center : any;
  position : any;
  label :string;
  constructor()
  {
    this.center={lat: 45.5248996, lng: 9.1744752};
    this.position = this.center;
    this.label = "ciao";
  }
}
