import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-block-options',
  imports: [FormsModule],
  templateUrl: './block-options.html',
  styleUrl: './block-options.css',
})
export class BlockOptions {
  textAlign: string = '5px 5px';
  position: string = 'static';

  @Output() cssEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    this.loadState();
    setTimeout(() => {
      this.cssEmitter.emit(this.getCss());
    }, 0);
  }

  private getCss(): string {
    let base = `display: block;`;
    if (this.textAlign) {
      base += ` text-align: ${this.textAlign};`;
    }
    if (this.position) {
      base += ` position: ${this.position};`;
    }
    return base;
  }

  private readonly storageKey = 'blockConfig';
  private loadState(): void {
    const savedState = localStorage.getItem(this.storageKey);
    if (savedState) {
      const config = JSON.parse(savedState);
      console.log('Loaded block config from localStorage:', config);
      this.textAlign = config.textAlign || this.textAlign;
      this.position = config.position || this.position;
    }
  }

  saveState(): void {
    this.cssEmitter.emit(this.getCss());
    const config = {
      textAlign: this.textAlign,
      position: this.position,
    };
    localStorage.setItem(this.storageKey, JSON.stringify(config));
  }
}
