import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('Existe my-a em app.component.html?', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.query(By.css('[data-testid="my-a"]'))).toBeDefined();          
  });

    
});
