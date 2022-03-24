import { Params } from '@angular/router';

export const routerFeatureKey = 'router';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}
