import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  menuClass: string = 'container';

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleSideBar() {
    this.menuClass =
      this.menuClass == 'container' ? 'container-expand' : 'container';
  }

  navigate(route: string) {
    this.router.navigate([`${route}`]);
  }
}
