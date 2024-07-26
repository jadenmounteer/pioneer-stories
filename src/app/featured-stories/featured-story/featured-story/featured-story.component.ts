import { Component, computed, inject, input, InputSignal } from '@angular/core';
import { StoryPreview } from '../../types/story-preview';
import { FileService } from '../../../files/services/file.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-featured-story',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './featured-story.component.html',
  styleUrl: './featured-story.component.scss',
})
export class FeaturedStoryComponent {
  private fileService: FileService = inject(FileService);

  public storyPreview: InputSignal<StoryPreview> = input.required();

  protected imageUrl = computed(async () => {
    console.log('In computed');
    const url = await this.fileService.getFileUrl(this.storyPreview().imageUrl);
    console.log('Got url!');
    console.log(url);
    return url;
  });
}
