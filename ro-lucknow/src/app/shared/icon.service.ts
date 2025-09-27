import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from './icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  constructor(private sanitizer: DomSanitizer) {}

  getIcon(name: keyof typeof ICONS): SafeHtml {
    const iconSvg = ICONS[name];
    return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
  }

  // For direct use without sanitization (if you trust the content)
  getRawIcon(name: keyof typeof ICONS): string {
    return ICONS[name];
  }
}