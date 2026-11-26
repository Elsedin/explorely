import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DESTINATIONS } from '../data/destinations.data';
import { Destination } from '../models/destination.model';

@Injectable({ providedIn: 'root' })
export class DestinationsService {
  getAll(): Observable<Destination[]> {
    return of(DESTINATIONS);
  }

  getById(id: number): Observable<Destination | undefined> {
    return of(DESTINATIONS.find((destination) => destination.id === id));
  }
}
