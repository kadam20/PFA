import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'side-bar',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  menuClass: string = 'container';
  subscription: Subscription;

  constructor(private readonly layoutService: LayoutService) {}

  ngOnInit() {
    this.subscription = this.layoutService.sideMenuExpand$.subscribe(
      (sideMenuExpand) => {
        this.menuClass = sideMenuExpand ? 'container-expand' : 'container';
      }
    );
  }

  test() {
    this.menuClass =
      this.menuClass == 'container' ? 'container-expand' : 'container';

    console.log(this.menuClass);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
