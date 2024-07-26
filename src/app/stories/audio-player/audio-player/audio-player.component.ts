import { Component, computed, inject, input, InputSignal } from '@angular/core';
import { FileService } from '../../../files/services/file.service';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [],
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.scss',
})
export class AudioPlayerComponent {
  private fileService: FileService = inject(FileService);

  public audioFilePath: InputSignal<string> = input.required();

  protected audioUrl = computed(async () => {
    const url = await this.fileService.getFileUrl(this.audioFilePath());
    return url;
  });
}
