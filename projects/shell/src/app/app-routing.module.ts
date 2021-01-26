import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
// import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'lead-management',
    loadChildren: () => import('leadManagement/Module').then((m) => m.RemoteModule),
  },
  // {
  //   path: 'lead-management',
  //   component: WrapperComponent,
  //   data: {
  //     importName: 'leadManagement',
  //     elementName: 'lead-management-element',
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
