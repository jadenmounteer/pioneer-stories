import { Component, inject, Input } from '@angular/core';
import { StoryService } from '../services/story.service';
import { Story } from '../types/story';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AudioPlayerComponent } from '../audio-player/audio-player/audio-player.component';

@Component({
  selector: 'app-story-view',
  standalone: true,
  imports: [CommonModule, AsyncPipe, AudioPlayerComponent],
  templateUrl: './story-view.component.html',
  styleUrl: './story-view.component.scss',
})
export class StoryViewComponent {
  private storyService: StoryService = inject(StoryService);

  protected story$: Observable<Story> = new Observable<Story>();

  @Input() set storyId(value: string) {
    this.story$ = this.storyService.getStory(value);
  }

  constructor() {}

  ngOnInit() {}
}
