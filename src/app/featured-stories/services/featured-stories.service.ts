import { Injectable } from '@angular/core';
import { StoryPreview } from '../types/story-preview';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeaturedStoriesService {
  constructor(private firestore: Firestore) {}

  public getStoryPreviews(): Observable<StoryPreview[]> {
    const collectionRef = collection(this.firestore, 'story-previews');

    return collectionData(collectionRef, {}) as Observable<StoryPreview[]>;
  }
}
