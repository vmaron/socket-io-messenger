import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '';
}

/**
 * Parameters for `CoreModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
