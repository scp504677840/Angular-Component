import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyParentComponent } from './spy-parent.component';

describe('SpyParentComponent', () => {
  let component: SpyParentComponent;
  let fixture: ComponentFixture<SpyParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
