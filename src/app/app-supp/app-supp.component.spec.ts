import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSuppComponent } from './app-supp.component';

describe('AppSuppComponent', () => {
  let component: AppSuppComponent;
  let fixture: ComponentFixture<AppSuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSuppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
