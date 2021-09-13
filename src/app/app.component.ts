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
    this.overlayContainer.getContainerElement().classList.add(this.theme);

    this.ngRedux.subscribe(() => {
      this.theme = this.ngRedux.getState().theme;

      const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
      const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('Theme'));
      if (themeClassesToRemove.length) {
        overlayContainerClasses.remove(...themeClassesToRemove);
      }
      overlayContainerClasses.add(this.theme);

    })
  }

  ngAfterViewInit() {
  }

}
