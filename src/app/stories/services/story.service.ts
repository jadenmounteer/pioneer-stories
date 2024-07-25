import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../types/story';
import { doc, docData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  constructor(private firestore: Firestore) {}

  // TODO This service gets the story JIT when the component is loaded.
  // I will have another service for the home page that loads the story previews that contain references to the stories.
  public getStory(storyID: string): Observable<Story> {
    const docRef = doc(this.firestore, `stories/${storyID}`);

    return docData(docRef, {}) as Observable<Story>;
  }
}
