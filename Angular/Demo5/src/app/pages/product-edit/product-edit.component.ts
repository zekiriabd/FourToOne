import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  editProductForm!:FormGroup;
  private ListProduct:any ;
  products: any;
constructor(private fb:FormBuilder, private router:Router){}
ngOnInit(){
  this.editProductForm =this.fb.group({
Id:[5],
Name: ['', Validators.required],
Image: ['', Validators.required],
Comment:['', Validators.required],
Price: [, Validators.required],
Discount:0,
LikeCount:0
  })
}

saveProduct(){
  if(this.editProductForm.valid){
    
    this.ListProduct  = localStorage.getItem("ListProduct"); 
    this.products = JSON.parse(this.ListProduct) ;
    this.products.push(this.editProductForm.value)
    localStorage.setItem("ListProduct", JSON.stringify(this.products));    
    this.router.navigate(["prductlist"]);
  }
  else{
    alert("Formulaire n'est pas valide")  
    this.validateAllFormFields(this.editProductForm);    
  }
  
}
validateAllFormFields(formGroup: FormGroup) {         //{1}Un formulaire réactif est une instance de FormGroup
  Object.keys(formGroup.controls).forEach(field => {  //{2}Nous allons parcourir chaque clé du formulaire
     const control = formGroup.get(field);            //{3}récupérer l'objet de contrôle
    if (control instanceof FormControl) {             //{4}Un formulaire peut avoir un FormControl
      control.markAsDirty({ onlySelf: true });        //{5}nous marquons le contrôle comme dirty
    } else if (control instanceof FormGroup) {        //{6}s'il s'agit d'un champ ou il peut avoir un FormGroup
      this.validateAllFormFields(control);            //{7}alors nous devons rappeler la même méthode
    }
  });
}
}
