import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTablaComponent } from './input-tabla.component';

describe('InputTablaComponent', () => {
  let component: InputTablaComponent;
  let fixture: ComponentFixture<InputTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTablaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
