import { NgModule } from "@angular/core";
import {RouterModule,Route} from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { DashbordComponent } from "./dashbord/dashbord.component";

export const appRoutes=[
     {path:"product",component:ProductComponent},
     {path:"dashbord",component:DashbordComponent}
];

@NgModule({
 imports:[
     RouterModule.forRoot(
         appRoutes,
         {enableTracing:true}
     )
 ],
 exports : [RouterModule]
})
export class AppRoutingModule{

}