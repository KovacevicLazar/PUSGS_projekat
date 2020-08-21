﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebProjekat.Baza;

namespace WebProjekat.Migrations
{
    [DbContext(typeof(BazaContext))]
    [Migration("20200821165844_CarsRenameColumn")]
    partial class CarsRenameColumn
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebProjekat.Models.Airline", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Adress");

                    b.Property<string>("CompanyName");

                    b.Property<string>("Description");

                    b.HasKey("Id");

                    b.ToTable("Airlines");
                });

            modelBuilder.Entity("WebProjekat.Models.Car", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BabySeats");

                    b.Property<string>("Brand");

                    b.Property<string>("Location");

                    b.Property<string>("Model");

                    b.Property<int>("NumberOfSeats");

                    b.Property<int>("PricePerDay");

                    b.Property<int?>("RentCarCompanyId");

                    b.Property<int>("Year");

                    b.HasKey("Id");

                    b.HasIndex("RentCarCompanyId");

                    b.ToTable("Cars");
                });

            modelBuilder.Entity("WebProjekat.Models.FriendRequest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Status");

                    b.Property<string>("UserId");

                    b.Property<string>("UserId2");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("FriendRequests");
                });

            modelBuilder.Entity("WebProjekat.Models.RentCarCompany", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Adress");

                    b.Property<string>("CompanyName");

                    b.Property<string>("Description");

                    b.HasKey("Id");

                    b.ToTable("RentCarCompanies");
                });

            modelBuilder.Entity("WebProjekat.Models.User", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("Address");

                    b.Property<int?>("AirlineComnpanyId");

                    b.Property<int?>("CarCompanyId");

                    b.Property<string>("ConcurrencyStamp");

                    b.Property<string>("Email");

                    b.Property<bool>("EmailConfirmed");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("Name");

                    b.Property<string>("NormalizedEmail");

                    b.Property<string>("NormalizedUserName");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<int>("Role");

                    b.Property<string>("SecurityStamp");

                    b.Property<string>("Surname");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("AirlineComnpanyId");

                    b.HasIndex("CarCompanyId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("WebProjekat.Models.Car", b =>
                {
                    b.HasOne("WebProjekat.Models.RentCarCompany")
                        .WithMany("Cars")
                        .HasForeignKey("RentCarCompanyId");
                });

            modelBuilder.Entity("WebProjekat.Models.FriendRequest", b =>
                {
                    b.HasOne("WebProjekat.Models.User")
                        .WithMany("Friends")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("WebProjekat.Models.User", b =>
                {
                    b.HasOne("WebProjekat.Models.Airline", "AirlineComnpany")
                        .WithMany()
                        .HasForeignKey("AirlineComnpanyId");

                    b.HasOne("WebProjekat.Models.RentCarCompany", "CarCompany")
                        .WithMany()
                        .HasForeignKey("CarCompanyId");
                });
#pragma warning restore 612, 618
        }
    }
}
