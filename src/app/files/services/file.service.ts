import { inject, Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private storage: Storage = inject(Storage);

  constructor() {}

  public async getFileUrl(filePath: string): Promise<string> {
    console.log('storyPreview', filePath);
    const storageRef = ref(this.storage, filePath);
    console.log('storageRef', storageRef);
    const downloadUrl = await getDownloadURL(storageRef);
    console.log('downloadUrl', downloadUrl);
    return downloadUrl;
  }
}
