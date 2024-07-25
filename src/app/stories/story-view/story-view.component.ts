import { Component, inject, Signal } from '@angular/core';
import { StoryService } from '../services/story.service';
import { Story } from '../types/story';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story-view.component.html',
  styleUrl: './story-view.component.scss',
})
export class StoryViewComponent {
  storyService: StoryService = inject(StoryService);
  story: Signal<Story | undefined> = toSignal(
    this.storyService.getStory('tFc2ePZtmLIdy0T5gUz5')
  );

  constructor() {}

  ngOnInit() {}
}
