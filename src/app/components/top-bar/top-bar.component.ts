import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'top-bar',
  standalone: true,
  imports: [CommonModule, AvatarModule, ButtonModule, MenuModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  settingsItems: MenuItem[];
  accountItems: MenuItem[];
  items: MenuItem[] | undefined;

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.setSettingsItems();
    this.setaccountItems();
  }

  setSettingsItems() {
    this.settingsItems = [
      {
        label: 'Themes',
        items: [
          {
            label: 'Light',
            icon: 'pi pi-sun',
            command: () => {
              this.layoutService.switchTheme('saga-blue');
            },
          },
          {
            label: 'Dark',
            icon: 'pi pi-moon',
            command: () => {
              this.layoutService.switchTheme('vela-blue');
            },
          },
        ],
      },
      {
        label: 'Languages',
        items: [
          {
            label: 'Hungarian',
            icon: 'pi pi-sun',
            command: () => {},
          },
          {
            label: 'English',
            icon: 'pi pi-moon',
            command: () => {},
          },
        ],
      },
    ];
  }

  setaccountItems() {
    this.accountItems = [
      {
        label: 'Options',
        items: [
          {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {},
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {},
          },
        ],
      },
    ];
  }
}
