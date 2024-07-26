import {
  Component,
  computed,
  EventEmitter,
  inject,
  input,
  InputSignal,
  Output,
} from '@angular/core';
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
  @Output() viewStory: EventEmitter<any> = new EventEmitter();

  protected imageUrl = computed(async () => {
    const url = await this.fileService.getFileUrl(this.storyPreview().imageUrl);

    return url;
  });
}
