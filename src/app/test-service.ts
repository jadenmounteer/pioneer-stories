import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private firestore: Firestore) {}

  public getData(gameSessionId: string): Observable<any> {
    const collectionRef = collection(this.firestore, 'stories');

    return collectionData(collectionRef, {});
  }
}
