import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import { AboutPage } from '../about/about';
import { EventListPage } from '../event-list/event-list';
@Component({
  templateUrl : 'tabs.html'
})

export class TabsPage {

  tab1 = HomePage;
  tab2 = EventListPage;
  tab3 = AboutPage;

  constructor(){

  }
}
