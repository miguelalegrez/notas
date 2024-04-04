import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaCrearComponent } from './nota-crear.component';

describe('NotaCrearComponent', () => {
  let component: NotaCrearComponent;
  let fixture: ComponentFixture<NotaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotaCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
