import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const layoutAlgorithms = [
  "block",
  "flex",
  "grid",
  "absolute",
  "float"
] as const;
type LayoutAlgorithm = typeof layoutAlgorithms[number];

@Component({
  selector: 'app-layout-teacher',
  imports: [CommonModule, FormsModule],
  templateUrl: './layout-teacher.html',
  styleUrl: './layout-teacher.css'
})
export class LayoutTeacher implements OnInit {

  algorithms = layoutAlgorithms

  selectedAlgorithm: LayoutAlgorithm = 'block';

  ngOnInit(): void {
    this.selectedAlgorithm = layoutAlgorithms[0];
  }

  onChange(): void {
    console.log('New algorithm selected:', this.selectedAlgorithm);
  }
}
