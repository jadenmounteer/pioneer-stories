import { Component, inject, Signal } from '@angular/core';
import { StoryPreview } from '../../types/story-preview';
import { toSignal } from '@angular/core/rxjs-interop';
import { FeaturedStoriesService } from '../../services/featured-stories.service';
import { CommonModule } from '@angular/common';

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

  protected featuredStories: Signal<StoryPreview[] | undefined> = toSignal(
    this.featuredStoriesService.getStoryPreviews()
  );
}
