import { Routes } from '@angular/router';

import { FormBuilderComponent } from './Features/form-builder/form-builder.component'

export const routes: Routes = [
    { path: '', redirectTo: 'form', pathMatch: 'full' },

    {
        path: 'form',
        component: FormBuilderComponent,
        pathMatch: 'full'
      },
     
];
