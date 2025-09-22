import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

type Experience = { role: string; org: string; period: string; bullets: string[] };
type Education = { title: string; org: string; period: string };
type Skill = { name: string; level: number };

@Component({
  selector: 'app-cv',
  imports: [CommonModule, TranslateModule],
  templateUrl: './cv.html',
  styleUrl: './cv.scss'
})
export class Cv {
  name = 'JONATAN MONTI';
  title = 'FULL-STACK DEVELOPER';
  photoUrl = 'assets/fotoCV.jpeg';

  // Contacto (SIN teléfono)
  contact = [
    { icon: '✉️', label: 'jonatan.monti@hotmail.com', href: 'mailto:jonatan.monti@hotmail.com' },
    { icon: '📍', label: 'Argentina, CABA', href: '#' },
    { icon: '🔗', label: 'linkedin.com/in/jonatanmonti', href: 'https://www.linkedin.com/in/jonatanmonti/' }
  ];

  about = `CV.ABOUT`;

  experience: Experience[] = [
    {
      role: 'CV.EXP1.ROLE',
      org: 'CV.EXP1.ORG',
      period: '2023 – 2025',
      bullets: [
        'CV.EXP1.B1',
        'CV.EXP1.B2',
        'CV.EXP1.B3'
      ]
    },
    {
      role: 'CV.EXP2.ROLE',
      org: 'CV.EXP2.ORG',
      period: '2025 – Actualidad',
      bullets: [
       'CV.EXP2.B1',
       'CV.EXP2.B2',
       'CV.EXP2.B3'
      ]
    }
  ];

  education: Education[] = [
    { title: 'CV.EDU1.TITLE', org: 'CV.EDU1.ORG', period: '2019 – Actualidad' },
    { title: 'CV.EDU2.TITLE', org: 'CV.EDU2.ORG', period: '' },
    { title: 'CV.EDU3.TITLE', org: 'CV.EDU3.ORG', period: '' }
  ];

  // skills de muestra (puedes editar niveles)
  skillsFrontend: Skill[] = [
    { name: 'Angular', level: 70 },
    { name: 'Ionic', level: 30 },
    { name: 'TypeScript', level: 70 },
    { name: 'HTML / CSS / SCSS', level: 90 },
    { name: 'Vue.js', level: 60 }
  ];
  skillsBackend: Skill[] = [
    { name: 'C# / .NET', level: 70 },
    { name: 'Web APIs / REST', level: 70 },
    { name: 'Entity Framework', level: 70 },
    { name: 'SQL', level: 70 }
  ];
  skillsDevops: Skill[] = [
    { name: 'Git', level: 85 },
    { name: 'Azure DevOps', level: 70 },
    { name: 'Linux / CLI', level: 50 }
  ];

  softSkills = [
    'CV.SOFT.TEAMWORK', 'CV.SOFT.ADAPTABILITY', 'CV.SOFT.ANALYTIC',
    'CV.SOFT.COLLAB', 'CV.SOFT.CREATIVITY', 'CV.SOFT.TIME',
    'CV.SOFT.PUBLIC', 'CV.SOFT.PRESSURE'
  ];
}
