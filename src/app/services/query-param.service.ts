import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { skip, takeUntil, take } from 'rxjs/operators';
import { timer } from 'rxjs';
import { isNil } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class QueryParamService {

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute) {
  }

  loadParam(key: string, loader: (value: string) => void): void {
    this.getParam(paramMap => {
      const param = paramMap.get(key);
      if (!isNil(param)) {
        loader(param);
      }
    });
  }

  loadParams(key: string, loader: (value: string[]) => void): void {
    this.getParam(paramMap => {
      const params = paramMap.getAll(key);
      if (!isNil(params) && params.length > 0) {
        loader(params);
      }
    });
  }

  saveParam(key: string, value: string | string[], save = true): void {
    this.router.navigate([], {
      queryParams: { [key]: value },
      queryParamsHandling: 'merge',
    });
  }

  private getParam(getter: (value: ParamMap) => void): void {
    getter(this.route.snapshot.queryParamMap);
  }
}
