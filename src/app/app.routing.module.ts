import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PageCallbackComponent } from './page-callback/page-callback.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
    {component: HomepageComponent, path: ""},
    {component: PageCallbackComponent, path: "page-callback"},
    {component: ErrorPageComponent, path: "**"}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}