import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiarcontrasenaPage } from './cambiarcontrasena.page';

describe('CambiarcontrasenaPage', () => {
  let component: CambiarcontrasenaPage;
  let fixture: ComponentFixture<CambiarcontrasenaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CambiarcontrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
