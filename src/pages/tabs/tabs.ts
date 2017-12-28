import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import { AboutPage } from '../about/about';
import { EventsPage } from '../events/events';
@Component({
  templateUrl : 'tabs.html'
})

export class TabsPage {

  tab1 = HomePage;
  tab2 = EventsPage;
  tab3 = AboutPage;

  constructor(){

  }
}
