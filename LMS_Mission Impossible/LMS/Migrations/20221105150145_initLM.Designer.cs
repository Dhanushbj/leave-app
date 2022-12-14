// <auto-generated />
using LMS.Data_Access_Layer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace LMS.Migrations
{
    [DbContext(typeof(LMS_DbContext))]
    [Migration("20221105150145_initLM")]
    partial class initLM
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("LMS.Data_Access_Layer.LeaveDb", b =>
                {
                    b.Property<int>("LID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");
                        

                    b.Property<string>("Edate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("EmpID")
                        .HasColumnType("int");

                    b.Property<string>("LStatus")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sdate")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("LID");

                    b.HasIndex("EmpID");

                    b.ToTable("Leaves");
                });

            modelBuilder.Entity("LMS.Models.Employees", b =>
                {
                    b.Property<int>("EmpID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");
                        

                    b.Property<string>("ConPwd")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gen")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("Ph")
                        .HasColumnType("bigint");

                    b.HasKey("EmpID");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("LMS.Models.Managers", b =>
                {
                    b.Property<int>("ManID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");
                        

                    b.Property<string>("ConPwd")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gen")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Lname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("Ph")
                        .HasColumnType("bigint");

                    b.HasKey("ManID");

                    b.ToTable("Managers");
                });

            modelBuilder.Entity("LMS.Data_Access_Layer.LeaveDb", b =>
                {
                    b.HasOne("LMS.Models.Employees", "Employees")
                        .WithMany()
                        .HasForeignKey("EmpID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Employees");
                });
#pragma warning restore 612, 618
        }
    }
}
