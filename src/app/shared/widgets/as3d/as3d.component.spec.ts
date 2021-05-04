import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AS3DComponent } from './as3d.component';

describe('ThreejscanvasComponent', () => {
  let component: AS3DComponent;
  let fixture: ComponentFixture<AS3DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AS3DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AS3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
