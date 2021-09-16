import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
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
    private ngRedux: NgRedux<IAppState>
  ) {
    this.section = ''
    this.theme = 'darkTheme'
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  changeTheme() {
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
