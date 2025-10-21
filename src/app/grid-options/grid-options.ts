import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'grid-options',
  imports: [FormsModule],
  templateUrl: './grid-options.html',
})
export class GridOptions implements OnInit {
  display: 'grid' | 'inline-grid' = 'grid';
  gridTemplateColumns: string = '1fr';
  gridTemplateRows: string = 'auto';
  gridArea: string = 'auto';
  columnGap: string = '5px';
  rowGap: string = '5px';
  justifyItems: string = 'stretch';
  alignItems: string = 'stretch';
  justifyContent: string = 'normal';
  alignContent: string = 'normal';

  @Output() cssEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    this.loadState();
    setTimeout(() => {
      this.cssEmitter.emit(this.getCss());
    }, 0);
  }

  private getCss(): string {
    let base = `display: ${this.display}; grid-template-columns: ${this.gridTemplateColumns}; grid-template-rows: ${this.gridTemplateRows}; grid-area: ${this.gridArea}; justify-items: ${this.justifyItems}; align-items: ${this.alignItems};`;
    if (this.columnGap && this.columnGap !== '0px') {
      base += ` column-gap: ${this.columnGap};`;
    }
    if (this.rowGap && this.rowGap !== '0px') {
      base += ` row-gap: ${this.rowGap};`;
    }
    if (this.justifyContent && this.justifyContent !== 'normal') {
      base += ` justify-content: ${this.justifyContent};`;
    }
    if (this.alignContent && this.alignContent !== 'normal') {
      base += ` align-content: ${this.alignContent};`;
    }
    return base;
  }

  private readonly storageKey = 'gridConfig';
  private loadState(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    const savedState = localStorage.getItem(this.storageKey);
    if (savedState) {
      const config = JSON.parse(savedState);
      console.log('Loaded grid config from localStorage:', config);
      this.gridTemplateColumns = config.gridTemplateColumns || this.gridTemplateColumns;
      this.gridTemplateRows = config.gridTemplateRows || this.gridTemplateRows;
      this.gridArea = config.gridArea || this.gridArea;
      this.display = config.display || this.display;
      this.columnGap = config.columnGap || this.columnGap;
      this.rowGap = config.rowGap || this.rowGap;
      this.justifyItems = config.justifyItems || this.justifyItems;
      this.alignItems = config.alignItems || this.alignItems;
      this.justifyContent = config.justifyContent || this.justifyContent;
      this.alignContent = config.alignContent || this.alignContent;
    }
  }

  saveState(): void {
    this.cssEmitter.emit(this.getCss());
    if (typeof localStorage === 'undefined') {
      return;
    }
    const config = {
      gridTemplateColumns: this.gridTemplateColumns,
      gridTemplateRows: this.gridTemplateRows,
      gridArea: this.gridArea,
      display: this.display,
      columnGap: this.columnGap,
      rowGap: this.rowGap,
      justifyItems: this.justifyItems,
      alignItems: this.alignItems,
      justifyContent: this.justifyContent,
      alignContent: this.alignContent,
    };
    localStorage.setItem(this.storageKey, JSON.stringify(config));
  }
}
