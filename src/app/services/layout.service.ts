import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private _sideMenuExpand = new BehaviorSubject<boolean>(false);
  sideMenuExpand$: Observable<boolean>;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.sideMenuExpand$ = this._sideMenuExpand.asObservable();
  }

  toggleSideMenu(): void {
    this._sideMenuExpand.next(!this._sideMenuExpand.getValue());
  }

  switchTheme(theme: string) {
    let themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }
}
