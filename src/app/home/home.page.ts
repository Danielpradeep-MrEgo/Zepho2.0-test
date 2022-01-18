import { Component, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from '../services/language_service/language.service';
import anime from 'animejs/lib/anime.es.js';
import { Flip } from 'number-flip';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedLanguage = '';

  constructor(private languageService: LanguageService) {}
  textWrapper = document.querySelector('.ml3');
  @ViewChild('numberflip', { read: ElementRef }) private flip: ElementRef;
  flipAnim = null;

  SelectLanguage(value: any) {
    console.log(value.detail.value);
    this.selectedLanguage = value.detail.value;
    this.languageService.setLanguage(this.selectedLanguage);
  }

  ngOnInit() {
    console.log('OnInit');
    anime
      .timeline({ loop: false })
      .add({
        targets: '.animate .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: (el, i) => 150 * (i + 1),
      })
      .add({
        targets: this.textWrapper,
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });

    anime({
      targets: '.spring',
      translateX: 25,
      direction: 'alternate',
      loop: true,
      easing: 'spring(1, 80, 10, 0)',
      autoPlay: false,
    });

    setTimeout(() => {
      console.log('hello');
      new Flip({
        node: this.flip.nativeElement,
        from: '0',
        to: '2',
        duration: 2,
        delay: 1,
      });
    }, 1000);
  }

  FinalLanguage() {
    console.log(this.selectedLanguage, 'final>>>>');
    this.languageService.setLanguage(this.selectedLanguage);
  }
}
