import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Footer,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PortafolioCV');
  private t = inject(TranslateService);

  constructor() {
    const saved = localStorage.getItem('lang') || 'es';
    this.t.setDefaultLang('es');
    this.t.use(saved);
  }
}
