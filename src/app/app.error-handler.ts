import {Response} from '@angular/http'
import { throwError } from 'rxjs';

export class ErrorHandler {
  static HandleError (error: Response | any) {
    let errorMessage: string

    if(error instanceof Response) {
      errorMessage = `Error: ${error.status} de obter ${error.url} - ${error.statusText}`
    }else{
      errorMessage = error.toString();
    }

    return throwError(errorMessage)
  }
}
