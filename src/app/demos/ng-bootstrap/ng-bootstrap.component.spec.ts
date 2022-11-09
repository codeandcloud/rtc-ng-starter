import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgBootstrapComponent } from './ng-bootstrap.component';

describe('DemoNgBootstrapComponent', () => {
  let component: DemoNgBootstrapComponent;
  let fixture: ComponentFixture<DemoNgBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoNgBootstrapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoNgBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
