import { Component, effect, inject, Signal } from '@angular/core';
import { StoryPreview } from '../../types/story-preview';
import { toSignal } from '@angular/core/rxjs-interop';
import { FeaturedStoriesService } from '../../services/featured-stories.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';

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

  private storage: Storage = inject(Storage);

  private router: Router = inject(Router);

  protected featuredStories: Signal<StoryPreview[] | undefined> = toSignal(
    this.featuredStoriesService.getStoryPreviews()
  );

  constructor() {
    effect(() => {
      console.log('In effect');
      this.featuredStories()?.forEach((storyPreview) => {
        this.getStoryImage(storyPreview);
      });
    });
  }

  protected viewStory(storyPreview: StoryPreview): void {
    this.router.navigate(['story-view', storyPreview.storyId]);
  }

  protected async getStoryImage(storyPreview: StoryPreview): Promise<void> {
    console.log('storyPreview', storyPreview);
    const storageRef = ref(this.storage, storyPreview.imageUrl);
    console.log('storageRef', storageRef);
    const downloadUrl = await getDownloadURL(storageRef);
    console.log('downloadUrl', downloadUrl);
  }
}
