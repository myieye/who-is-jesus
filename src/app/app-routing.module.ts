import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { DEFAULT_LANGUAGE, languages, Language } from './content/languages';

const userCulter =
  navigator.languages && navigator.languages[0] || // Chrome / Firefox
  navigator.language; // All browsers
const userLang = userCulter.substring(0, 2).toLowerCase() as Language;
const defaultLang = languages.includes(userLang) ? userLang : DEFAULT_LANGUAGE;


const routes: Routes = [
  {
    path: ':lang',
    component: AppWrapperComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: defaultLang,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      {
        paramsInheritanceStrategy: 'always',
        //enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules,
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
