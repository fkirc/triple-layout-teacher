import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flex-options',
  imports: [FormsModule],
  templateUrl: './flex-options.html',
  styleUrl: './flex-options.css',
})
export class FlexOptions implements OnInit {
  flexDirection: string = 'row';
  flexWrap: string = 'nowrap';
  justifyContent: string = 'flex-start';
  alignItems: string = 'stretch';
  alignContent: string = 'normal';
  gap: string = '5px 5px';

  @Output() cssEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    this.loadState();
    setTimeout(() => {
      this.sendCssToParent();
    }, 0);
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
    if (this.gap !== 'initial') {
      base += ` gap: ${this.gap};`;
    }
    return base;
  }

  private readonly storageKey = 'flexboxConfig';
  private loadState(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    const savedState = localStorage.getItem(this.storageKey);
    if (savedState) {
      const config = JSON.parse(savedState);
      console.log('Loaded flexbox config from localStorage:', config);
      this.flexDirection = config.flexDirection || this.flexDirection;
      this.flexWrap = config.flexWrap || this.flexWrap;
      this.justifyContent = config.justifyContent || this.justifyContent;
      this.alignItems = config.alignItems || this.alignItems;
      this.alignContent = config.alignContent || this.alignContent;
      this.gap = config.gap || this.gap;
    }
  }

  private saveState(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    const config = {
      flexDirection: this.flexDirection,
      flexWrap: this.flexWrap,
      justifyContent: this.justifyContent,
      alignItems: this.alignItems,
      alignContent: this.alignContent,
      gap: this.gap,
    };
    localStorage.setItem(this.storageKey, JSON.stringify(config));
  }
}
