import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cv } from '../cv/cv';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Cv],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
