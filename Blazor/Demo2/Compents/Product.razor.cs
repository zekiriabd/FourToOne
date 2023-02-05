using Demo2.Models;
namespace Demo2.Compents
{
    public partial class Product
    {
        private MyProduct product = new()
        {
            Id = 1,
            Name = "Nike Air Max ",
            Image = "Product1.png",
            Comment = @"Confort rembourré
                        La semelle intermédiaire en mousse et l'unité Max Air au talon amortissent votre pied pour
                        un confort durable. Le col en mousse protège votre cheville à chacun de vos mouvements.",
            Price = 109.99M,
            Discount = 50
        };
    }
}
