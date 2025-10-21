import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlockOptions } from '../block-options/block-options';
import { FlexOptions } from '../flex-options/flex-options';
import { GridOptions } from '../grid-options/grid-options';

const layoutAlgorithms = ['block', 'flex', 'grid', 'absolute', 'float'] as const;
type LayoutAlgorithm = (typeof layoutAlgorithms)[number];

@Component({
  selector: 'app-layout-teacher',
  imports: [CommonModule, FormsModule, BlockOptions, FlexOptions, GridOptions],
  templateUrl: './layout-teacher.html',
  styleUrl: './layout-teacher.css',
})
export class LayoutTeacher implements OnInit {
  algorithms = layoutAlgorithms;

  selectedAlgorithm: LayoutAlgorithm = 'block';
  playgroundParentStyle: string = '';

  ngOnInit(): void {
    this.selectedAlgorithm = layoutAlgorithms[0];
    this.playgroundParentStyle = '';
  }

  onCssChange(newCss: string): void {
    this.playgroundParentStyle = newCss;
  }

  onAlgorithmChange(): void {
    console.log('selectedAlgorithm changed:', this.selectedAlgorithm);
  }
}
