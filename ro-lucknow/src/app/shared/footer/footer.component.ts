import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CONTACT_INFO } from '../contact-info';
import { ICONS } from '../icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contact = CONTACT_INFO;
  icons: { [key: string]: SafeHtml } = {};

  constructor(private sanitizer: DomSanitizer) {
    // Sanitize all icons for safe HTML rendering
    Object.keys(ICONS).forEach(key => {
      this.icons[key] = this.sanitizer.bypassSecurityTrustHtml(ICONS[key as keyof typeof ICONS]);
    });
  }
}
