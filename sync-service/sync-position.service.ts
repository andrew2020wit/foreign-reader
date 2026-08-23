import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SyncPositionService {
  public readonly localStorageKey = 'syncPositionServiceUrl-foreign-reader';
  public isOn = signal(false);

  private syncPositionServiceUrl = '';

  private readonly httpClient = inject(HttpClient);

  constructor() {
    this.loadFromLocalStorage();
  }

  public getBookPosition(bookId: string, position: number): Observable<{blockId: number}> {
    return this.httpClient.get<{blockId: number}>(this.syncPositionServiceUrl + '/api/book/position', {
      params: {
        bookId,
        position,
      },
    });
  }

  private loadFromLocalStorage(): void {
    const storedValue = (localStorage.getItem(this.localStorageKey) || '')?.trim() || '';

    this.syncPositionServiceUrl = storedValue;

    this.isOn.set(!!storedValue);
  }
}
