import { NgRedux } from '@angular-redux/store';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CHANGE_THEME, NAV_STATE } from 'src/app/redux/actions';
import { IAppState } from 'src/app/redux/store';

@Component({
  selector: 'tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  section: string
  theme: string

  constructor(
    private router: Router,
    private overlayContainer: OverlayContainer,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.section = ''
    this.theme = 'darkTheme'
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.overlayContainer.getContainerElement().classList.add(this.theme)
  }

  changeTheme() {
    this.theme = this.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme'

    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('Theme'));

    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }

    overlayContainerClasses.add(this.theme);

    this.ngRedux.dispatch({ type: CHANGE_THEME })
  }

  moveSideNav() {
    this.ngRedux.dispatch({ type: NAV_STATE })
  }

  onLogout() {
    localStorage.removeItem('authorization');
    window.location.href = 'http://127.0.0.1:4200/login';
  }

}
