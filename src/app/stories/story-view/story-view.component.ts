import { Component, inject } from '@angular/core';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-story-view',
  standalone: true,
  imports: [],
  templateUrl: './story-view.component.html',
  styleUrl: './story-view.component.scss',
})
export class StoryViewComponent {
  storyService: StoryService = inject(StoryService);

  constructor() {}

  ngOnInit() {}
}
