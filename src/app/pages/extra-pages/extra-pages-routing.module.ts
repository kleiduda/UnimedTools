import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sitemap', loadChildren: () => import('./sitemap/sitemap.module').then(m => m.SitemapModule) },
  { path: 'error-404-alt', loadChildren: () => import('./error404-alt/error404-alt.module').then(m => m.Error404AltModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraPagesRoutingModule { }
