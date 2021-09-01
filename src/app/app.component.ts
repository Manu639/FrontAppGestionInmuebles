import { OverlayContainer } from '@angular/cdk/overlay';
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

  constructor(
    private overlayContainer: OverlayContainer
  ) {
    this.section = ''
    this.theme = 'darkTheme'
    this.isNavOpen = false
  }

  ngAfterViewInit() {
    this.overlayContainer.getContainerElement().classList.add(this.theme)
  }

  moveSideNav() {
    this.isNavOpen = this.isNavOpen ? false : true
  }

  changeTheme() {
    this.theme = this.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('Theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.theme);


  }
}
