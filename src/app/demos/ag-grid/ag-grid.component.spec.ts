import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAgGridComponent } from './ag-grid.component';

describe('DemoAgGridComponent', () => {
  let component: DemoAgGridComponent;
  let fixture: ComponentFixture<DemoAgGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoAgGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
