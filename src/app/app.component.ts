import { IAppState } from './redux/store';
import { NgRedux } from '@angular-redux/store';
import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  theme: string

  constructor(
    private overlayContainer: OverlayContainer,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.theme = ""
  }

  ngOnInit(): void {
    this.theme = this.ngRedux.getState().theme;
    this.overlayContainer.getContainerElement().classList.add(this.theme)

    this.ngRedux.subscribe(() => {
      this.theme = this.ngRedux.getState().theme;

      const overlayClasses = this.overlayContainer.getContainerElement().classList;

      const classesToRemove = Array.from(overlayClasses).filter((item: string) => item.includes('Theme'));

      if (classesToRemove.length) {
        overlayClasses.remove(...classesToRemove);
      }

      overlayClasses.add(this.theme);

    })
  }

  ngAfterViewInit() {
  }

}
