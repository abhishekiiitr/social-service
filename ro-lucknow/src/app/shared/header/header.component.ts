import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CONTACT_INFO } from '../contact-info';
import { ICONS } from '../icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, MatToolbarModule]
})
export class HeaderComponent {
  contact = CONTACT_INFO;
  icons: { [key: string]: SafeHtml } = {};

  constructor(private sanitizer: DomSanitizer) {
    // Sanitize all icons for safe HTML rendering
    Object.keys(ICONS).forEach(key => {
      this.icons[key] = this.sanitizer.bypassSecurityTrustHtml(ICONS[key as keyof typeof ICONS]);
    });
  }
}
