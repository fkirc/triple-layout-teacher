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

  @Output() cssEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    this.sendCssToParent();
  }

  sendCssToParent(): void {
    console.log('Flex direction changed to:', this.flexDirection);
    this.cssEmitter.emit(this.getCss());
  }

  private getCss(): string {
    return `display: flex; flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this.justifyContent}; align-items: ${this.alignItems};`;
  }
}
