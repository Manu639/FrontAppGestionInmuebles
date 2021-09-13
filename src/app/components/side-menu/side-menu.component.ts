import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { NAV_STATE } from 'src/app/redux/actions';
import { IAppState } from 'src/app/redux/store';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {


  isNavOpen: boolean

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {
    this.isNavOpen = false
  }

  ngOnInit(): void {
    this.ngRedux.subscribe(() => {
      this.isNavOpen = this.ngRedux.getState().isNavOpen
    })
  }

  moveSideNav() {
    this.ngRedux.dispatch({ type: NAV_STATE })
  }

}
