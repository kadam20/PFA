import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../services/layout.service';
import { TieredMenuModule } from 'primeng/tieredmenu';

@Component({
  selector: 'top-bar',
  standalone: true,
  imports: [CommonModule, AvatarModule, ButtonModule, TieredMenuModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  settingsItems: MenuItem[];
  accountItems: MenuItem[];
  currentTheme: string = 'light';
  currentLang: string = 'en';

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.setSettingsItems();
    this.setaccountItems();
  }

  switchTheme(theme: string) {
    this.currentTheme = theme;
    if (theme == 'light') {
      this.layoutService.switchTheme('saga-blue');
    } else {
      this.layoutService.switchTheme('vela-blue');
    }
    this.setSettingsItems();
  }

  switchLang(lang: string) {
    this.currentLang = lang;
    this.setSettingsItems();
  }

  setSettingsItems() {
    this.settingsItems = [
      {
        label: 'Themes',
        disabled: true,
      },
      {
        label: 'Light',
        icon: 'pi pi-sun',
        command: () => {
          this.switchTheme('light');
        },
        badge: ' ',
        badgeStyleClass: this.currentTheme == 'light' ? 'selected-opt' : '',
      },
      {
        label: 'Dark',
        icon: 'pi pi-moon',
        command: () => {
          this.switchTheme('dark');
        },
        badge: ' ',
        badgeStyleClass: this.currentTheme == 'dark' ? 'selected-opt' : '',
      },
      {
        separator: true,
      },
      {
        label: 'Languages',
        disabled: true,
      },
      {
        label: 'Hungarian',
        icon: 'hun-icon',
        command: () => {
          this.switchLang('hu');
        },
        badge: ' ',
        badgeStyleClass: this.currentLang == 'hu' ? 'selected-opt' : '',
      },
      {
        label: 'English',
        icon: 'usa-icon',
        command: () => {
          this.switchLang('en');
        },
        badge: ' ',
        badgeStyleClass: this.currentLang == 'en' ? 'selected-opt' : '',
      },
    ];
  }

  setaccountItems() {
    this.accountItems = [
      {
        label: 'Account Actions',
        disabled: true,
      },
      {
        label: 'Edit Account',
        icon: 'pi pi-user-edit',
        command: () => {},
      },
      {
        label: 'Log out',
        icon: 'pi pi-sign-out',
        command: () => {},
      },
    ];
  }
}
