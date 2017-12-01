import { HeaderService } from './header.service';

import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  providers: [HeaderService],
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any = {};

  userMenu = [{
    title: 'Profile', func: () => {

       this.router.navigate(['pages/registration/myprofile']);
    },
  }, {
    title: 'Log out', func: () => {
      this.router.navigate(['auth/login']);
    },
  }];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private analyticsService: AnalyticsService, private router: Router, private headerservice: HeaderService) {
  }
  menuclick(data) {
    data.func();
  }
  ngOnInit() {

      this.user.name = this.headerservice.getFullName();
        this.headerservice.getProfilePicture().subscribe(data => this.user.picture = 'data:image/png;base64,' + data);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
