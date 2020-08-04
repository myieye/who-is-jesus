import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppWrapperComponent } from '../app-wrapper/app-wrapper.component';

const routes: Routes = [
  {
    path: ':lang',
    component: AppWrapperComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: AppWrapperComponent,
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
