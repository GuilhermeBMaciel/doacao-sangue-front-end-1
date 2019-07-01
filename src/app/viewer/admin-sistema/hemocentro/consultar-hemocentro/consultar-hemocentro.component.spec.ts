import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarHemocentroComponent } from './consultar-hemocentro.component';

describe('ConsultarHemocentroComponent', () => {
  let component: ConsultarHemocentroComponent;
  let fixture: ComponentFixture<ConsultarHemocentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarHemocentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarHemocentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
