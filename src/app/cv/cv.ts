import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Bullet = { text: string };
type Experience = { role: string; org: string; period: string; bullets: Bullet[] };
type Education = { title: string; org: string; period: string };
type Skill = { name: string; level: number };

@Component({
  selector: 'app-cv',
  imports: [CommonModule],
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

  about = `Desarrollador full-stack con experiencia en desarrollo web y de software.
Proactivo, organizado y responsable, capaz de resolver problemas de forma creativa,
tanto individualmente como en equipo.`;

  experience: Experience[] = [
    {
      role: 'Desarrollador Full-Stack',
      org: 'Ministerio de Economía',
      period: '2023 – 2025',
      bullets: [
        { text: 'Desktop Software (C#, SQL, Windows Forms).' },
        { text: 'ASP.NET Core 8, Web APIs, JSON, MVC, EF Core.' },
        { text: 'Angular, TypeScript, Bootstrap, Azure DevOps.' }
      ]
    },
    {
      role: 'Desarrollador Full-Stack',
      org: 'Comisión Nacional de Valores',
      period: '2025 – Actualidad',
      bullets: [
        { text: 'ASP.NET Core 8, Web APIs, JSON, MVC, EF Core.' },
        { text: 'Angular/Ionic, TypeScript, Vue.js, Bootstrap.' },
        { text: 'Trabajo en equipo, buenas prácticas, testing.' }
      ]
    }
  ];

  education: Education[] = [
    { title: 'Ingeniería en Sistemas Informáticos', org: 'Universidad Abierta Interamericana', period: '2019 – Actualidad' },
    { title: 'Desarrollo Web', org: 'CoderHouse', period: '' },
    { title: 'Fundamentos de desarrollo de software', org: 'Microsoft (Microsoft Learn/LinkedIn)', period: '' }
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
    'Trabajo en equipo', 'Adaptabilidad', 'Razonamiento analítico', 'Colaboración',
    'Creatividad', 'Gestión del tiempo', 'Hablar en público', 'Resolución bajo presión'
  ];
}
