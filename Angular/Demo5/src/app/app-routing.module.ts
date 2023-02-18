import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderlistComponent} from './pages/orderlist/orderlist.component';
import { ProductListComponent } from './pages/productlist/productlist.component';
const routes: Routes = [ 
  {path:'', redirectTo:'prductlist',pathMatch:'full'},
  {path:'prductlist',component:ProductListComponent},
  {path:'orderlist/:ids',component:OrderlistComponent}
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule { }
