import { IAppState } from './redux/store';
import { NgRedux } from '@angular-redux/store';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  theme: string

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {
    this.theme = ""
  }

  ngOnInit(): void {
    this.theme = this.ngRedux.getState().theme;

    this.ngRedux.subscribe(() => {
      this.theme = this.ngRedux.getState().theme;
    })
  }

}
