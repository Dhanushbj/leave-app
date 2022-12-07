using LMS.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LMS.Data_Access_Layer
{
    public class LeaveDb
    {
        [Required]
        [Key]
        [Display(Name = "LeaveID")]
        public int LID { get; set; }
        [Required]
        [Display(Name = "Leave Status")]
        public string LStatus { get; set; }
        [Required]
        [Display(Name = "Leave Type")]
        public string LType { get; set; }
        [Required]
        [Display(Name = "Start Date")]
        [DataType(DataType.Date)]
        public string Sdate { get; set; }
        [Required]
        [Display(Name = "End Date")]
        [DataType(DataType.Date)]
        public string Edate { get; set; }
        public int EmpID { get; set; }
        [ForeignKey("EmpID")]
        public virtual Employees Employees { get; set; }
    }
}
