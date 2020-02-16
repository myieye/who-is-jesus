import { environment } from './environments/environment';
export class DebugSettings {

    static get verseTags(): boolean {
        return DebugSettings.envGet(true);
    }

    private static envGet(value: boolean): boolean {
        return value && !environment.production;
    }
}