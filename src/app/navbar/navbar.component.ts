import { Component, OnInit, Input, Output, EventEmitter, EventEmitter, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  showSideBar : boolean;

  @Output()
  showSideBarChange :EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
    console.log('here is navbar component showSideBar'+this.showSideBar);
  }

  showHideSideBar() :void{
     this.showSideBar = !this.showSideBar;
     this.showSideBarChange.emit(this.showSideBar);
  }
}
