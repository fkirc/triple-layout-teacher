import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'image-object-fit',
  imports: [FormsModule],
  template: `
    <div style="background-color: aqua; display: inline-block;">
      <select
        style="background-color: aqua;"
        id="objectFit-select"
        [(ngModel)]="objectFit"
        (ngModelChange)="saveState()"
      >
        <option value="fill">object-fit: fill</option>
        <option value="contain">object-fit: contain</option>
        <option value="cover">object-fit: cover</option>
        <option value="none">object-fit: none</option>
        <option value="scale-down">object-fit: scale-down</option>
      </select>

      <img style="width: 20vw; height: 8vh" [style.objectFit]="objectFit" src="./favicon.ico" />
    </div>
  `,
  styles: [],
})
export class ImageObjectFit implements OnInit {
  objectFit: string = 'fill';

  private readonly storageKey: string = 'imageObjectFit';

  ngOnInit(): void {
    setTimeout(() => {
      this.loadState();
    }, 0);
  }

  private loadState(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    const storedObjectFit = localStorage.getItem(this.storageKey);
    if (storedObjectFit) {
      this.objectFit = storedObjectFit;
    }
  }

  public saveState(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(this.storageKey, this.objectFit);
  }
}
