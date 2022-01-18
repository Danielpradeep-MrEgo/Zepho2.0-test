import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  LANGUAGE_KEY = 'selected_language';
  value: any;
  selected = '';

  constructor(private translate: TranslateService) {}

  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    Storage.get({
      key: this.LANGUAGE_KEY,
    }).then((value) => {
      if (value) {
        this.setLanguage(value.value);
        this.selected = value.value;
      }
    });
    console.log(language, 'DEFAULT LANGggggg');
  }

  getLanguages() {
    return [
      { text: 'en', value: 'en' },
      { text: 'English', value: 'English' },
      { text: 'Hindi', value: 'Hindi' },
      { text: 'Tamil', value: 'Tamil' },
    ];
  }

  setLanguage(val: any) {
    this.translate.use(val === 'null' ? 'en' : val);
    this.selected = val;
    Storage.set({
      key: this.LANGUAGE_KEY,
      value: this.selected,
    });
    console.log(val === null ? 'en' : val, 'SER');
  }
}
