import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexOptions } from './flex-options';

describe('FlexOptions', () => {
  let component: FlexOptions;
  let fixture: ComponentFixture<FlexOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
