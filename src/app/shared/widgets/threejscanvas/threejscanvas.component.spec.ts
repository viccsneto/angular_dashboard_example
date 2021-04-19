import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejscanvasComponent } from './threejscanvas.component';

describe('ThreejscanvasComponent', () => {
  let component: ThreejscanvasComponent;
  let fixture: ComponentFixture<ThreejscanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreejscanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejscanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
