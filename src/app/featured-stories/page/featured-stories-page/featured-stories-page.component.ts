import { Component, inject, Signal } from '@angular/core';
import { StoryPreview } from '../../types/story-preview';
import { toSignal } from '@angular/core/rxjs-interop';
import { FeaturedStoriesService } from '../../services/featured-stories.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-stories-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-stories-page.component.html',
  styleUrl: './featured-stories-page.component.scss',
})
export class FeaturedStoriesPageComponent {
  private featuredStoriesService: FeaturedStoriesService = inject(
    FeaturedStoriesService
  );

  private router: Router = inject(Router);

  protected featuredStories: Signal<StoryPreview[] | undefined> = toSignal(
    this.featuredStoriesService.getStoryPreviews()
  );

  protected viewStory(storyPreview: StoryPreview) {
    this.router.navigate(['story-view', storyPreview.storyId]);
  }
}
