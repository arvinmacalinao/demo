import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'recipe/:id',
    // path: 'recipe',
    loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then( m => m.EmployeePageModule)
  },
  {
    path: 'employee-details/:id',
    loadChildren: () => import('./employee-details/employee-details.module').then( m => m.EmployeeDetailsPageModule)
  },
  {
    path: 'filipino-food',
    loadChildren: () => import('./filipino-food/filipino-food.module').then( m => m.FilipinoFoodPageModule)
  },
  {
    path: 'films',
    loadChildren: () => import('./films/films.module').then( m => m.FilmsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'nba',
    loadChildren: () => import('./nba/nba.module').then( m => m.NbaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
