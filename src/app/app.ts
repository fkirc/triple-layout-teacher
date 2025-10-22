import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutTeacher } from './layout-teacher/layout-teacher';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutTeacher],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('triple-layout-teacher');
}
