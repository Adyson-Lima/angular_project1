import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('Meu a', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.query(By.css('a'))).toBeTruthy();
  });

  it('Meu p', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.query(By.css('p'))).toBeTruthy();
  });

  it('Meu form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.debugElement.query(By.css('form'))).toBeTruthy();
  });

});
