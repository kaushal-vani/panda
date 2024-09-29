import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBotComponent } from './navigation-bot.component';

describe('NavigationBotComponent', () => {
  let component: NavigationBotComponent;
  let fixture: ComponentFixture<NavigationBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationBotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
