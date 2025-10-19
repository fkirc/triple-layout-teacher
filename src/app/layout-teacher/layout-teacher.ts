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

function getParentStyle(algorithm: LayoutAlgorithm): string {
  switch (algorithm) {
    case 'block':
      return 'display: block;';
    case 'flex':
      return 'display: flex;';
    case 'grid':
      return 'display: grid; grid-template-columns: repeat(2, 1fr);';
    case 'absolute':
      return 'position: relative;';
    case 'float':
      return 'float: left; width: 100%;';
    default:
      return '';
  }
}

@Component({
  selector: 'app-layout-teacher',
  imports: [CommonModule, FormsModule],
  templateUrl: './layout-teacher.html',
  styleUrl: './layout-teacher.css'
})
export class LayoutTeacher implements OnInit {

  algorithms = layoutAlgorithms

  selectedAlgorithm: LayoutAlgorithm = 'block';
  playgroundParentStyle: string = '';

  ngOnInit(): void {
    this.selectedAlgorithm = layoutAlgorithms[0];
    this.playgroundParentStyle = getParentStyle(this.selectedAlgorithm);
  }

  onChange(): void {
    this.playgroundParentStyle = getParentStyle(this.selectedAlgorithm);
  }
}
