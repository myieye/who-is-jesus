import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { DEFAULT_LANGUAGE } from './content/languages';

const routes: Routes = [
  {
    path: ':lang',
    component: AppWrapperComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: DEFAULT_LANGUAGE,
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
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
