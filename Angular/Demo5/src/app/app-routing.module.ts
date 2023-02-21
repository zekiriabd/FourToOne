import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderlistComponent} from './pages/orderlist/orderlist.component';
import { ProductListComponent } from './pages/productlist/productlist.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
const routes: Routes = [ 
  {path:'', redirectTo:'prductlist',pathMatch:'full'},
  {path:'prductlist',component:ProductListComponent},
  {path:'orderlist/:ids',component:OrderlistComponent},
  {path:'productedit',component:ProductEditComponent},
  {path: '**', component: NotfoundComponent }
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule { }
