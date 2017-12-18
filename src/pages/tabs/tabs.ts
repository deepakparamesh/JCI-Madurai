import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {BusinessPage} from '../business/business';
import { AboutPage } from '../about/about';
@Component({
  templateUrl : 'tabs.html'
})

export class TabsPage {

  tab1 = HomePage;
  tab2 = BusinessPage;
  tab3 = AboutPage;

  constructor(){

  }
}
