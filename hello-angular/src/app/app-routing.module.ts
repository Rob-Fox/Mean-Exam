import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './task/task.component';
import { DisplayInfoComponent } from './display-info/display-info.component';
import { EditInfoComponent } from './edit-info/edit-info.component';

const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: HomeComponent },
    { path: 'products/new', component: NewComponent },
    { path: 'products/:id', component: DisplayInfoComponent },
    { path: 'products/:id/edit', component: EditInfoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [NewComponent];
