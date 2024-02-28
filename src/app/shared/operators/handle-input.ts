import { debounceTime, distinctUntilChanged, filter, Observable, startWith } from 'rxjs';

export function handleInput(minLength = 3, initialString = '', debounceTimeMs = 250) {
  return (source$: Observable<string>): Observable<string> =>
    source$.pipe(
      filter((value) => value?.length >= minLength),
      startWith(initialString),
      debounceTime(debounceTimeMs),
      distinctUntilChanged()
    );
}
