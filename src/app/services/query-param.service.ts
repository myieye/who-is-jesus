import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { isNil, isEmpty } from 'lodash';
import { UserSettingsService } from './user-settings.service';
import { pathKey } from '../../vars';

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
    private readonly route: ActivatedRoute,
    private readonly userSettings: UserSettingsService,
  ) {
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
        replaceUrl: true,
      })).then(async () => {
        await this.saveCurrentPath();
        return true;
      });
  }

  async saveCurrentPath(): Promise<void> {
    return this.userSettings.put(pathKey, location.pathname + location.search);
  }

  async loadSavedPath(): Promise<boolean> {
    const savedPath = await this.userSettings.get(pathKey);

    if (isEmpty(savedPath)) {
      return false;
    } else {
      const urlTree = this.router.parseUrl(savedPath);
      return this.router.navigateByUrl(urlTree, {
        replaceUrl: true,
      });
    }
  }
}
