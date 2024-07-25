import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedStoriesPageComponent } from './featured-stories-page.component';

describe('FeaturedStoriesPageComponent', () => {
  let component: FeaturedStoriesPageComponent;
  let fixture: ComponentFixture<FeaturedStoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedStoriesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedStoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
