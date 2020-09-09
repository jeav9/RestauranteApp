import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdenComponent } from './components/orden/orden.component';
import { HomeComponent } from './components/home/home.component';
import { CrearOrdenComponent } from './components/crear-orden/crear-orden.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'crearOrden', component : CrearOrdenComponent },
  { path: 'orden', component: OrdenComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
