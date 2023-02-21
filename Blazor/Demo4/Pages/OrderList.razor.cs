using Blazored.LocalStorage;
using Demo4.Models;
using Microsoft.AspNetCore.Components;
using System.Text.Json;

namespace Demo4.Pages
{
    public partial class OrderList
    {
        [Inject] private ILocalStorageService _LocalStorageService { get; set; }
        private IEnumerable<MyProduct> SelectedProducts { get; set; }
        private List<MyProduct> products { get; set; } = new();

        [Parameter] public string strIds {get;set;}
        protected override async Task OnInitializedAsync()
        {
            //SelectedProducts = products.Where(x => _Store.Ids.Contains(x.Id));
            string strproducts = await _LocalStorageService.GetItemAsync<string>("data");
            products = JsonSerializer.Deserialize<MyProduct[]>(strproducts).ToList();
            var ids = strIds.Split(',');
            SelectedProducts = products.Where(x => ids.Contains(x.Id.ToString()));
        }
    }
}
