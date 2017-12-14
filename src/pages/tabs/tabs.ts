import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {ContactPage } from '../contact/contact';
import {BusinessPage} from '../business/business';

@Component({
  templateUrl : 'tabs.html'
})

export class TabsPage {

  tab1 = HomePage;
  tab2 = BusinessPage;
  tab3 = ContactPage;

  constructor(){

  }
}
