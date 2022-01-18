import { Component } from '@angular/core';
import { LanguageService } from './services/language_service/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private languageService: LanguageService) {
    this.initilizeApp();
  }

  initilizeApp() {
    this.languageService.setInitialAppLanguage();
  }
}
