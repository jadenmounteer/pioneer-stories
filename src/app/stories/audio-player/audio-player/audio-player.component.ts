import { Component, computed, inject, input, InputSignal } from '@angular/core';
import { FileService } from '../../../files/services/file.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.scss',
})
export class AudioPlayerComponent {
  private fileService: FileService = inject(FileService);

  public audioFilePath: InputSignal<string> = input.required();

  protected audioUrl = computed(async () => {
    const url = await this.fileService.getFileUrl(this.audioFilePath());
    console.log(url);
    return url;
  });
}
