using Demo3.Models;
using Microsoft.AspNetCore.Components;
using System.Reflection.Metadata;

namespace Demo3.Compents
{
    public partial class Product
    {
        [Parameter] public MyProduct ProductArgs { get; set; }
    }
}
