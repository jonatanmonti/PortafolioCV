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
  expanded: Record<string, boolean> = {
  exp2023_2024: false,
  exp2025: false
};

toggle(id: 'exp2023_2024' | 'exp2025') {
  this.expanded[id] = !this.expanded[id];
}

isExpanded(id: 'exp2023_2024' | 'exp2025') {
  return !!this.expanded[id];
}
}
