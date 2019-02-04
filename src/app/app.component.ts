import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion de stock';
  showHideSideBar : boolean =false;

  onShowSideBarChange(showHideSideBar) :void {
    console.log('Side bar change event occured'+showHideSideBar);
    this.showHideSideBar = showHideSideBar;
  }
}
