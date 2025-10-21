import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flex-options',
  imports: [FormsModule],
  templateUrl: './flex-options.html',
  styleUrl: './flex-options.css',
})
export class FlexOptions {
  flexDirection: string = 'row';
  flexWrap: string = 'nowrap';
  justifyContent: string = 'flex-start';
  alignItems: string = 'stretch';
  alignContent: string = 'normal';

  @Output() cssEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    this.loadState();
    this.sendCssToParent();
  }

  sendCssToParent(): void {
    this.cssEmitter.emit(this.getCss());
    this.saveState();
  }

  private getCss(): string {
    let base = `display: flex; flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this.justifyContent}; align-items: ${this.alignItems};`;
    if (this.alignContent !== 'normal') {
      base += ` align-content: ${this.alignContent};`;
    }
    return base;
  }

  private readonly storageKey = 'flexboxConfig';
  private loadState(): void {
    const savedState = localStorage.getItem(this.storageKey);
    if (savedState) {
      const config = JSON.parse(savedState);
      console.log('Loaded flexbox config from localStorage:', config);
      this.flexDirection = config.flexDirection || this.flexDirection;
      this.flexWrap = config.flexWrap || this.flexWrap;
      this.justifyContent = config.justifyContent || this.justifyContent;
      this.alignItems = config.alignItems || this.alignItems;
      this.alignContent = config.alignContent || this.alignContent;
    }
  }

  private saveState(): void {
    const config = {
      flexDirection: this.flexDirection,
      flexWrap: this.flexWrap,
      justifyContent: this.justifyContent,
      alignItems: this.alignItems,
      alignContent: this.alignContent,
    };
    localStorage.setItem(this.storageKey, JSON.stringify(config));
  }
}
