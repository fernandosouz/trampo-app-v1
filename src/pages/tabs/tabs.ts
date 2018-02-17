import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { CheckPage } from "../check/check";
import { ReportsPage } from "../reports/reports";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  ListPage = ListPage;
  CheckPage = CheckPage;
  ReportsPage = ReportsPage

  constructor() {

  }
}
