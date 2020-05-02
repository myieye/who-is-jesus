import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { isNil } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class QueryParamService {

  private navigation = Promise.resolve(true);

  private get paramMap(): ParamMap {
    return this.route.snapshot.queryParamMap;
  }

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute) {
  }

  loadParam(key: string, loader: (value: string) => void): void {
    const param = this.paramMap.get(key);
    if (!isNil(param)) {
      loader(param);
    }
  }

  loadParams(key: string, loader: (value: string[]) => void): void {
    const params = this.paramMap.getAll(key);
    if (!isNil(params) && params.length > 0) {
      loader(params);
    }
  }

  saveParam(key: string, value: string | string[], save = true): void {
    this.navigation = this.navigation.then(() =>
      this.router.navigate([], {
        queryParams: { [key]: value },
        queryParamsHandling: 'merge',
      }));
  }
}
