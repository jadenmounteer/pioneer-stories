import { Component, inject, Input } from '@angular/core';
import { StoryService } from '../services/story.service';
import { Story } from '../types/story';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-story-view',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './story-view.component.html',
  styleUrl: './story-view.component.scss',
})
export class StoryViewComponent {
  // ID is: tFc2ePZtmLIdy0T5gUz5
  protected story$: Observable<Story> = new Observable<Story>();

  @Input() set storyId(value: string) {
    this.story$ = this.storyService.getStory(value);
  }

  storyService: StoryService = inject(StoryService);

  constructor() {}

  ngOnInit() {}
}
