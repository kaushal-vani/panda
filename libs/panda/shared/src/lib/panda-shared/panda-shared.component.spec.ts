import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PandaSharedComponent } from './panda-shared.component';

describe('PandaSharedComponent', () => {
  let component: PandaSharedComponent;
  let fixture: ComponentFixture<PandaSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PandaSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PandaSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
