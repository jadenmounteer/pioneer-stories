import { Routes } from '@angular/router';
import { FeaturedStoriesPageComponent } from './featured-stories/page/featured-stories-page/featured-stories-page.component';
import { StoryViewComponent } from './stories/story-view/story-view.component';

export const routes: Routes = [
  {
    path: '',
    component: FeaturedStoriesPageComponent,
  },
  {
    path: 'story-view/:storyId',
    component: StoryViewComponent,
  },
];
