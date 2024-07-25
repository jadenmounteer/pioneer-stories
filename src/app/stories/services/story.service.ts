import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Story } from '../types/story';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  constructor(private firestore: Firestore) {}

  public getStory(storyID: string): Observable<Story[]> {
    const collectionRef = collection(this.firestore, 'stories');

    return collectionData(collectionRef, {}) as Observable<Story[]>;
  }
}
