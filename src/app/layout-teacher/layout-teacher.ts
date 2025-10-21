import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlockOptions } from '../block-options/block-options';
import { FlexOptions } from '../flex-options/flex-options';
import { GridOptions } from '../grid-options/grid-options';
import { ConfigurableChild } from './configurable-child';
import { ImageObjectFit } from './image-object-fit';

const layoutAlgorithms = ['flex', 'grid', 'block'] as const;
export type LayoutAlgorithm = (typeof layoutAlgorithms)[number];

@Component({
  selector: 'app-layout-teacher',
  imports: [
    CommonModule,
    FormsModule,
    BlockOptions,
    FlexOptions,
    GridOptions,
    ConfigurableChild,
    ImageObjectFit,
  ],
  templateUrl: './layout-teacher.html',
  styleUrl: './layout-teacher.css',
})
export class LayoutTeacher implements OnInit {
  algorithms = layoutAlgorithms;

  layoutAlgorithm: LayoutAlgorithm = 'flex';
  playgroundParentStyle: string = '';

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
      const { layoutAlgorithm, objectFit } = JSON.parse(layoutConfig);
      this.layoutAlgorithm = layoutAlgorithm || this.layoutAlgorithm;
    }
  }

  saveState(): void {
    const layoutConfig = {
      layoutAlgorithm: this.layoutAlgorithm,
    };
    localStorage.setItem(this.storageKey, JSON.stringify(layoutConfig));
  }
}
