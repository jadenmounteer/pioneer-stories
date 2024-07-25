import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestService } from './test-service';
import { StoryViewComponent } from './stories/story-view/story-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StoryViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pioneer-stories';

  testService: TestService = inject(TestService);

  ngOnInit() {
    this.testService.getData('gameSessionId').subscribe((data) => {
      console.log(data);
    });
  }
}
