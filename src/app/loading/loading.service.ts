import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, of } from "rxjs";
import { tap, concatMap, finalize } from "rxjs/operators";

// @Injectable({
//   providedIn: "root",
// })
@Injectable()
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.loadingOn()),
      concatMap(() => obs$),
      finalize(() => this.loadinOff())
    );
  }

  loadingOn() {
    this.loadingSubject.next(true);
  }

  loadinOff() {
    this.loadingSubject.next(false);
  }
}
