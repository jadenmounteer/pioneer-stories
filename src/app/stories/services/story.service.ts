import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../types/story';
import { doc, docData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  constructor(private firestore: Firestore) {}

  public getStory(storyID: string): Observable<Story> {
    const docRef = doc(this.firestore, `stories/${storyID}`);

    return docData(docRef, {}) as Observable<Story>;
  }
}
