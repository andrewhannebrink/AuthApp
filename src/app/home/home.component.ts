import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../app.component.scss']
})
export class HomeComponent implements OnInit {

  public BONUS_NAV_VIEWS = BONUS_NAV_VIEWS;
  public VIEWS = VIEWS;

  public currentView: string;

  constructor(public router: Router,
    public authService: AuthService) { }

  changeView(view: string): void {
    if (!!this.VIEWS[view]) {
      this.currentView = this.VIEWS[view];
    } else {
      console.log('View: ' + view + ' does not exist.');
    }
  }

  bonusNavSettingsTabChanged(tabChangeEvent: MatTabChangeEvent): void {
    if (tabChangeEvent.index === 0) {
      this.changeView(VIEWS.ACCOUNT_DETAILS);
    } else if (tabChangeEvent.index === 1) {
      this.changeView(VIEWS.PASSWORD);
    } else {
      this.changeView(VIEWS.PAYMENT);
    }
  }

  getBonusNavSettingsTabIndexFromCurrentView(currentView: string): number {
    if (BONUS_NAV_VIEWS.SETTINGS.includes(currentView)) {
      return BONUS_NAV_VIEWS.SETTINGS.indexOf(currentView);
    }

    return 0;
  }

  ngOnInit() { }

}

export const VIEWS = {
  ACCOUNT_DETAILS: 'ACCOUNT_DETAILS',
  EXPLORE: 'EXPLORE',
  HELP: 'HELP',
  LOG_OUT: 'LOG_OUT',
  PASSWORD: 'PASSWORD',
  PAYMENT: 'PAYMENT',
  PROFILE: 'PROFILE'
};

const BONUS_NAV_VIEWS = {
  SETTINGS: [
    VIEWS.ACCOUNT_DETAILS,
    VIEWS.PASSWORD,
    VIEWS.PAYMENT,
  ],
  DASHBOARD: [
    VIEWS.EXPLORE,
    VIEWS.PROFILE 
  ]
}