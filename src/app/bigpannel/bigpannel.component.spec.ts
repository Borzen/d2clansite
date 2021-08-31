import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigpannelComponent } from './bigpannel.component';

describe('BigpannelComponent', () => {
  let component: BigpannelComponent;
  let fixture: ComponentFixture<BigpannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigpannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
