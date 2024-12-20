import { Component } from '@angular/core';
import {
  IconDefinition,
  faGripLines,
  faRocket,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faRocket = faRocket;
  faGripLines = faGripLines;
  faXmark = faXmark;

  openNavbar: boolean = false;
  faIcon: IconDefinition = faGripLines;

  toglleNavbar() {
    this.openNavbar = !this.openNavbar;

    this.openNavbar === true
      ? (this.faIcon = this.faXmark)
      : (this.faIcon = this.faGripLines);
  }
}
