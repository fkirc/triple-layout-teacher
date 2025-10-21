import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlockOptions } from '../block-options/block-options';
import { FlexOptions } from '../flex-options/flex-options';
import { GridOptions } from '../grid-options/grid-options';

const layoutAlgorithms = ['flex', 'grid', 'block'] as const;
type LayoutAlgorithm = (typeof layoutAlgorithms)[number];

@Component({
  selector: 'app-layout-teacher',
  imports: [CommonModule, FormsModule, BlockOptions, FlexOptions, GridOptions],
  templateUrl: './layout-teacher.html',
  styleUrl: './layout-teacher.css',
})
export class LayoutTeacher implements OnInit {
  algorithms = layoutAlgorithms;

  selectedAlgorithm: LayoutAlgorithm = 'flex';
  playgroundParentStyle: string = '';
  objectFit: string = 'fill';

  ngOnInit(): void {
    this.loadState();
  }

  onCssChange(newCss: string): void {
    this.playgroundParentStyle = newCss;
  }

  private readonly storageKey = 'layoutConfig';
  private loadState(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    const layoutConfig = localStorage.getItem(this.storageKey);
    if (layoutConfig) {
      console.log('Loaded layoutConfig from localStorage:', layoutConfig);
      const { selectedAlgorithm, objectFit } = JSON.parse(layoutConfig);
      this.selectedAlgorithm = selectedAlgorithm || this.selectedAlgorithm;
      this.objectFit = objectFit || this.objectFit;
    }
  }

  saveState(): void {
    const layoutConfig = {
      selectedAlgorithm: this.selectedAlgorithm,
      objectFit: this.objectFit,
    };
    localStorage.setItem(this.storageKey, JSON.stringify(layoutConfig));
  }
}
