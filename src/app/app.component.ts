import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  theme: string;
  isNavOpen: boolean;

  constructor() {
    this.theme = 'darkTheme'
    this.isNavOpen = false
  }

  moveSideNav() {
    this.isNavOpen = this.isNavOpen ? false : true
  }

  changeTheme() {
    this.theme = this.theme === 'defaultTheme' ? 'darkTheme' : 'defaultTheme'
  }
}
