using System.ComponentModel.DataAnnotations;

namespace Demo4.Models
{  
    public class MyProduct
    {
        public int Id { get; set;}
       
        [Required]          
        public string Name { get; set; }
       
        [Required]      
        public string Image { get; set; }
       
        [Required]
        public string Comment { get; set; }
       
        [Required]
        public decimal Price { get; set; }

        [Range(1, 100, ErrorMessage = "Accommodation invalid (1-100).")]
        public int Discount { get; set; }
        public int LikeCount { get; set; }
    }
}
