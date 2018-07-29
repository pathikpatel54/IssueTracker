import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'issue/:id', component: FormComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})

export class AppRouting { }