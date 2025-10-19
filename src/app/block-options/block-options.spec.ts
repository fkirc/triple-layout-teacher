import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockOptions } from './block-options';

describe('BlockOptions', () => {
  let component: BlockOptions;
  let fixture: ComponentFixture<BlockOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
