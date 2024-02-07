import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('Existe card em app.component?', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.query(By.css('[data-testid="mycard"]'))).toBeTruthy();
  });

  // it('Meu p', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   expect(fixture.debugElement.query(By.css('[data-testid="my-p"]'))).toBeTruthy();
  // });

  // it('Meu form', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   expect(fixture.debugElement.query(By.css('[data-testid="my-form"]'))).toBeTruthy();
  // });

});
