import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationLandingPageComponent } from './quotation-landing-page.component';

describe('QuotationLandingPageComponent', () => {
  let component: QuotationLandingPageComponent;
  let fixture: ComponentFixture<QuotationLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
