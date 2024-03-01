import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../shared.module';

import { TabNavigatorComponent } from './tab-navigator.component';

describe('TabNavigatorComponent', () => {
  let component: TabNavigatorComponent;
  let fixture: ComponentFixture<TabNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [TabNavigatorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TabNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
