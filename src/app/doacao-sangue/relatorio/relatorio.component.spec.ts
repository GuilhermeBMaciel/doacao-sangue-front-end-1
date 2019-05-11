import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatorio1ListaComponent } from './relatorio.component';

describe('RelatorioComponent', () => {
  let component: Relatorio1ListaComponent;
  let fixture: ComponentFixture<Relatorio1ListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Relatorio1ListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Relatorio1ListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
