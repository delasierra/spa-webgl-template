import { Component, OnInit } from '@angular/core';
import {ScrollMagic} from '../app.component';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: []
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let scroll = new ScrollMagic.Scene({
      duration: 100,	// the scene should last for a scroll distance of 100px
      offset: 50		// start this scene after scrolling for 50px
    });
        // .setPin("#my-sticky-element") // pins the element for the the scene's duration
        // .addTo(controller); // assign the scene to the controller
  }

}
