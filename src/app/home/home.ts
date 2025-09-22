import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cv } from '../cv/cv';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Cv, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
