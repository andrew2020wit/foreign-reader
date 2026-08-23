SyncPositionService

getBookPosition(bookId: string, position: number): Observable<{blockId: number}> 

it takes position (current position) and finds the last position for bookId (from a database).

if the last position is bigger than return last position (blockId), otherwise return the current position and save it to a database.

FE go to this position if it is bigger than the current position.

You can set api url in settings.
