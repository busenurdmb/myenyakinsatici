import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepageheaderComponent } from './singlepageheader.component';

describe('SinglepageheaderComponent', () => {
  let component: SinglepageheaderComponent;
  let fixture: ComponentFixture<SinglepageheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinglepageheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SinglepageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
