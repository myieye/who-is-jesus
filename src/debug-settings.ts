import { environment } from './environments/environment';
export class DebugSettings {

    static get verseTags(): boolean {
        return DebugSettings.envGet(false);
    }

    static get reloadNotification(): boolean {
        return DebugSettings.envGet(false);
    }

    private static envGet(value: boolean): boolean {
        return value && !environment.production;
    }
}