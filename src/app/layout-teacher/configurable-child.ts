import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutAlgorithm } from './layout-teacher';

@Component({
  selector: 'configurable-child',
  imports: [FormsModule],
  template: `
    <div class="child" [style]="childCss">
      <div style="display: inline; margin-right: 4px">{{ childName }}:</div>
      <select class="child" [(ngModel)]="childCss" (ngModelChange)="saveState()">
        <option value="display: block;">
          {{ layoutAlgorithm === 'flow' ? '🟢' : '⚪' }}
          display: block
        </option>
        <option value="display: inline;">
          {{ layoutAlgorithm === 'flow' ? '🟢' : '⚪' }}
          display: inline
        </option>
        <option value="display: inline-block;">
          {{ layoutAlgorithm === 'flow' ? '🟢' : '⚪' }}
          display: inline-block
        </option>
        <option value="float: left;">
          {{ layoutAlgorithm === 'flow' ? '🟢' : '🔴' }}
          float: left
        </option>
        <option value="float: right;">
          {{ layoutAlgorithm === 'flow' ? '🟢' : '🔴' }}
          float: right
        </option>
        <option value="position: absolute;">
          {{ '🟢' }}
          position: absolute
        </option>
        <option value="position: absolute; bottom: 0; left: 0;">
          {{ '🟢' }}
          position: absolute; bottom: 0; left: 0;
        </option>
        <option value="position: relative; top: -20px;">
          {{ '🟢' }}
          position: relative; top: -20px;
        </option>
        <option value="align-self: auto;">
          {{ layoutAlgorithm === 'flex' ? '🟢' : '🔴' }}
          align-self: auto
        </option>
        <option value="align-self: stretch">
          {{ layoutAlgorithm === 'flex' ? '🟢' : '🔴' }}
          align-self: stretch
        </option>
        <option value="align-self: center;">
          {{ layoutAlgorithm === 'flex' ? '🟢' : '🔴' }}
          align-self: center
        </option>
        <option value="align-self: flex-start;">
          {{ layoutAlgorithm === 'flex' ? '🟢' : '🔴' }}
          align-self: flex-start
        </option>
        <option value="align-self: flex-end;">
          {{ layoutAlgorithm === 'flex' ? '🟢' : '🔴' }}
          align-self: flex-end
        </option>
        <option value="flex-grow: 1;">
          {{ layoutAlgorithm === 'flex' ? '🟢' : '🔴' }}
          flex-grow: 1
        </option>
        <option value="flex-grow: 2;">
          {{ layoutAlgorithm === 'flex' ? '🟢' : '🔴' }}
          flex-grow: 2
        </option>
      </select>
    </div>
  `,
  styles: [
    `
      .child {
        background-color: aqua;
      }
      :host {
        display: contents; // So that the wrapper div does not prevent children from being flex/grid items
      }
    `,
  ],
})
export class ConfigurableChild implements OnInit {
  childCss: string = 'display: inline-block;';
  @Input() layoutAlgorithm!: LayoutAlgorithm;
  @Input() childName!: string;

  private storageKey() {
    return `configurableChild-${this.childName}-css`;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadState();
    }, 0);
  }

  private loadState(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    const storedCss = localStorage.getItem(this.storageKey());
    if (storedCss) {
      this.childCss = storedCss;
    }
  }

  public saveState(): void {
    console.log('Saving css for ' + this.childName, this.childCss);
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(this.storageKey(), this.childCss);
  }
}
