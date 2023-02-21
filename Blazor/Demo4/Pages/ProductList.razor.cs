using Blazored.LocalStorage;
using Demo4.Models;
using Microsoft.AspNetCore.Components;
using System.Text.Json;

namespace Demo4.Pages
{
    public partial class ProductList
    {
        [Inject] private ILocalStorageService _LocalStorageService { get; set; }
        private List<MyProduct> products { get; set; } = new();
        
        private List<int> Ids { get; set; } = new();
        protected override async Task OnInitializedAsync()
        {
           string strproducts = await _LocalStorageService.GetItemAsync<string>("data");
            if (string.IsNullOrEmpty(strproducts))
            {
                strproducts = @"[{
  ""Id"": 1,
  ""Name"": ""ASUS Rog"",
  ""Image"": ""https://www.cdiscount.com/pdt2/9/6/2/1/300x300/asu3760302523962/rw/asus-notebook-x409fa-bv606t-15-core-i3-2-1-ghz.jpg"",
  ""Comment"": ""Le PC Portable Gaming ASUS ROG STRIX G17 vous permettra de jouer dans les meilleures conditions à vos jeux PC favoris grâce à des composants ultra-performants, un écran 144 Hz et une conception haut de gamme qui ne laisse rien au hasard."",
  ""Price"": 12354.00,
  ""Discount"": 50
},
{
  ""Id"": 2,
  ""Name"": ""ASUS22222"",
  ""Image"": ""https://m.media-amazon.com/images/I/5107xCFAVpL._AC_SS450_.jpg"",
  ""Comment"": ""Le PC Portable Gaming ASUS ROG STRIX G17 vous permettra de jouer dans les meilleures conditions à vos jeux PC favoris grâce à des composants ultra-performants, un écran 144 Hz et une conception haut de gamme qui ne laisse rien au hasard."",
  ""Price"": 1754.00,
  ""Discount"": 50
},
{
  ""Id"": 3,
  ""Name"": ""ASUS33333"",
  ""Image"": ""https://www.cdiscount.com/pdt2/9/6/2/1/300x300/asu3760302523962/rw/asus-notebook-x409fa-bv606t-15-core-i3-2-1-ghz.jpg"",
  ""Comment"": ""Le PC Portable Gaming ASUS ROG STRIX G17 vous permettra de jouer dans les meilleures conditions à vos jeux PC favoris grâce à des composants ultra-performants, un écran 144 Hz et une conception haut de gamme qui ne laisse rien au hasard."",
  ""Price"": 12994.0,
  ""Discount"": 50
}]";
                await _LocalStorageService.SetItemAsync("data", strproducts);
            }
            products = JsonSerializer.Deserialize<MyProduct[]>(strproducts).ToList();
        }
        private void AddProductToIds(int id)
        {
            Ids.Add(id);
        }
    }
}
