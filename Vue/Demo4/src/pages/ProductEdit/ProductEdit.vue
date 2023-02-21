<template>
    <h3>ProductEdit</h3>
<div class="card">
    <h5 class="card-header">new product</h5>
    <div class="card-body">
        <Form v-on:submit="Save()" v-slot="{ errors }">
            <div class="form-group">
                <label for="txName">Name</label>
                <Field name="pName" :rules="isRequired" v-model="this.ProductO.Name" id="txName" class="form-control" placeholder="Enter name"/>
                <span class="text-danger">{{ errors.pName }}</span>
            </div>
            <div class="form-group">
                <label for="txComment">Comment</label>
                <input type="text" id="txComment" class="form-control" placeholder="Enter name" v-model="this.ProductO.Comment" />
            </div>
            <div class="form-group">
                <label for="txPrice">Price</label>
                <input type="text" id="txPrice" class="form-control" placeholder="Enter name" v-model="this.ProductO.Price" />
            </div>
            <div class="form-group">
                <label for="txDiscount">Discount</label>
                <input type="text" id="txDiscount" class="form-control" placeholder="Enter name" v-model="this.ProductO.Discount" />
            </div>
            <div class="form-group">
                <label for="image">Image</label>
                <input type="text" id="txComment" class="form-control" placeholder="Enter name" v-model="this.ProductO.Image" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </Form>
    </div>
</div>
</template>
<script>
import { Field, Form } from 'vee-validate';
export default{
    components: {Field,Form},
    data() { return { ProductO:{} } },
    methods: {
        isRequired(value) { return value ? true : 'This field is required'; },  
        Save() {
            let strproducts = localStorage.getItem('data');
            let products = JSON.parse(strproducts);
            products.push(this.ProductO);
            strproducts = JSON.stringify(products);
            localStorage.setItem('data',strproducts);
            this.$router.push('/');
        }
    },  
}
</script>