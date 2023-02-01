import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import {AuthenticationGuard} from "./authentication.guard";
import {LoginComponent} from "./views/pages/auth/login/login.component";
import {BonLivraisonModule} from "./views/pages/bon-livraison/bon-livraison.module";




const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    canActivate: [AuthenticationGuard],
    children: [
      { path: 'login', component: LoginComponent },
      {
        component: BaseComponent,
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        component: BaseComponent,
        path: 'apps',
        loadChildren: () => import('./views/pages/apps/apps.module').then(m => m.AppsModule)
      },
      {
        component: BaseComponent,
        path: 'ui-components',
        loadChildren: () => import('./views/pages/ui-components/ui-components.module').then(m => m.UiComponentsModule)
      },
      {
        component: BaseComponent,
        path: 'advanced-ui',
        loadChildren: () => import('./views/pages/advanced-ui/advanced-ui.module').then(m => m.AdvancedUiModule)
      },
      {
        component: BaseComponent,
        path: 'form-elements',
        loadChildren: () => import('./views/pages/form-elements/form-elements.module').then(m => m.FormElementsModule)
      },
      {
        component: BaseComponent,
        path: 'advanced-form-elements',
        loadChildren: () => import('./views/pages/advanced-form-elements/advanced-form-elements.module').then(m => m.AdvancedFormElementsModule)
      },
      {
        component: BaseComponent,
        path: 'charts-graphs',
        loadChildren: () => import('./views/pages/charts-graphs/charts-graphs.module').then(m => m.ChartsGraphsModule)
      },
      {
        component: BaseComponent,
        path: 'tables',
        loadChildren: () => import('./views/pages/tables/tables.module').then(m => m.TablesModule)
      },
      {
        component: BaseComponent,
        path: 'icons',
        loadChildren: () => import('./views/pages/icons/icons.module').then(m => m.IconsModule)
      },
      {
        component: BaseComponent,
        path: 'general',
        loadChildren: () => import('./views/pages/general/general.module').then(m => m.GeneralModule)
      },
      {
        component: BaseComponent,
        path: 'client',
        loadChildren: () => import('./views/pages/client/client.module').then(m => m.ClientModule)
      },
      {
        component: BaseComponent,
        path: 'devis',
        loadChildren: () => import('./views/pages/devis/devis.module').then(m => m.DevisModule)
      },
      {
        component: BaseComponent,
        path: 'facture-client',
        loadChildren: () => import('./views/pages/facture-client/facture-client-module').then(m => m.factureClientModule)
      },
      {
        component: BaseComponent,
        path: 'facture-fournisseur',
        loadChildren: () => import('./views/pages/facture-fournisseur/facturefournisseurmodule').then(m => m.FactureFournisseurModule)
      },
      {
        component: BaseComponent,
        path: 'bon-commande',
        loadChildren: () => import('./views/pages/bon-commande/bon-commande.module').then(m => m.BonCommandeModule )
      },
      {
        component: BaseComponent,
        path: 'bon-Livraison',
        loadChildren: () => import('./views/pages/bon-livraison/bon-livraison.module').then(m => m.BonLivraisonModule )
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
