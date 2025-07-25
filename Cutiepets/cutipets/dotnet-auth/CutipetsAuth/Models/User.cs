// File: Models/User.cs

using System.ComponentModel.DataAnnotations;

namespace CutipetsAuth.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public required string Name { get; set; }

        [Required]
        [EmailAddress]
        public required string Email { get; set; }

        [Required]
        public required string Password { get; set; }

        [Phone]
        public required string Mobile { get; set; }

        [Required]
        public required string Role { get; set; } // Admin, User, Doctor
    }
}
