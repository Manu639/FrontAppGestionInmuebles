import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  section: string
  theme: string;
  isNavOpen: boolean;

  constructor() {
    this.section = ''
    this.theme = 'darkTheme'
    this.isNavOpen = false
  }

  moveSideNav() {
    this.isNavOpen = this.isNavOpen ? false : true
  }

  changeTheme() {
    this.theme = this.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
  }
}
