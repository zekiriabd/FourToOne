using Demo4.Models;
using Microsoft.AspNetCore.Components;
using System.Reflection.Metadata;

namespace Demo4.Compents
{
    public partial class Product
    {
        [Parameter] public MyProduct ProductArgs { get; set; }
        [Parameter] public bool Readonly { get; set; }
        private decimal DiscountPrice => ProductArgs.Price * ProductArgs.Discount / 100;

        [Parameter] public EventCallback<int> OnAddProduct { get; set; }
        private async Task AddProduct()
        {
            //_Store.Ids.Add(ProductArgs.Id);
            await OnAddProduct.InvokeAsync(ProductArgs.Id);
        }
    }
}