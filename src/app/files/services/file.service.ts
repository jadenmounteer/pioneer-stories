import { inject, Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private storage: Storage = inject(Storage);

  constructor() {}

  public async getFileUrl(filePath: string): Promise<string> {
    const storageRef = ref(this.storage, filePath);

    const downloadUrl = await getDownloadURL(storageRef);

    return downloadUrl;
  }
}
