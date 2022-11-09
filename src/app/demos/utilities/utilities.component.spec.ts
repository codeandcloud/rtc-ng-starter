import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoUtilitiesComponent } from './utilities.component';

describe('DemoUtilitiesComponent', () => {
  let component: DemoUtilitiesComponent;
  let fixture: ComponentFixture<DemoUtilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoUtilitiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
