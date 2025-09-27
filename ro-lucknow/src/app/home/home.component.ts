import { Component } from '@angular/core';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from '../shared/icons';
import { CONTACT_INFO } from '../shared/contact-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  icons: { [key: string]: SafeHtml } = {};
  contact = CONTACT_INFO;
  
  constructor(private title: Title, private meta: Meta, private sanitizer: DomSanitizer) {
    this.title.setTitle('RO Repair & Service in Lucknow — Onsite RO Repair');
    this.meta.updateTag({ name: 'description', content: 'Trusted RO & water filter repair in Lucknow. Call +91-9876543210' });
    
    // Sanitize all icons for safe HTML rendering
    Object.keys(ICONS).forEach(key => {
      this.icons[key] = this.sanitizer.bypassSecurityTrustHtml(ICONS[key as keyof typeof ICONS]);
    });
  }
}
