import { Component, input, InputSignal } from '@angular/core';
import { StoryPreview } from '../../types/story-preview';

@Component({
  selector: 'app-featured-story',
  standalone: true,
  imports: [],
  templateUrl: './featured-story.component.html',
  styleUrl: './featured-story.component.scss',
})
export class FeaturedStoryComponent {
  public storyPreview: InputSignal<StoryPreview> = input.required();
}
