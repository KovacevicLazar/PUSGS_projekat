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
    [Migration("20200827152539_Marks2")]
    partial class Marks2
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

            modelBuilder.Entity("WebProjekat.Models.CarReservation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Brand");

                    b.Property<int?>("CarId");

                    b.Property<string>("Location");

                    b.Property<string>("Model");

                    b.Property<int>("NumberOfDays");

                    b.Property<DateTime>("PickupDate");

                    b.Property<DateTime>("ReturnDate");

                    b.Property<int>("TotalPrice");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("CarId");

                    b.HasIndex("UserId");

                    b.ToTable("CarReservations");
                });

            modelBuilder.Entity("WebProjekat.Models.Flight", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AirlineId");

                    b.Property<int>("BusySeats");

                    b.Property<DateTime>("DateArrival");

                    b.Property<DateTime>("DateDepart");

                    b.Property<string>("FirstStop");

                    b.Property<int>("FlightDistance");

                    b.Property<string>("FlyingFrom");

                    b.Property<string>("FlyingTo");

                    b.Property<bool>("IsOver");

                    b.Property<string>("SecondStop");

                    b.Property<string>("ThirdStop");

                    b.Property<int>("TicketPrice");

                    b.Property<int>("VacantSeats");

                    b.HasKey("Id");

                    b.HasIndex("AirlineId");

                    b.ToTable("Flights");
                });

            modelBuilder.Entity("WebProjekat.Models.FlightMark", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("FlightId");

                    b.Property<string>("UserId");

                    b.Property<int>("mark");

                    b.HasKey("Id");

                    b.HasIndex("FlightId");

                    b.HasIndex("UserId");

                    b.ToTable("FlightMarks");
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

            modelBuilder.Entity("WebProjekat.Models.ReservedSeat", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("FlightId");

                    b.Property<string>("NameOfUser");

                    b.Property<string>("SeatName");

                    b.Property<string>("SurnameOfUser");

                    b.Property<string>("UserId");

                    b.Property<int>("passportNumberOfUser");

                    b.HasKey("Id");

                    b.HasIndex("FlightId");

                    b.HasIndex("UserId");

                    b.ToTable("ReservedSeats");
                });

            modelBuilder.Entity("WebProjekat.Models.SeatReservationRequest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("ReservedSeatId");

                    b.Property<int>("Status");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("ReservedSeatId");

                    b.HasIndex("UserId");

                    b.ToTable("SeatReservationRequests");
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

            modelBuilder.Entity("WebProjekat.Models.CarReservation", b =>
                {
                    b.HasOne("WebProjekat.Models.Car")
                        .WithMany("CarReservations")
                        .HasForeignKey("CarId");

                    b.HasOne("WebProjekat.Models.User")
                        .WithMany("CarReservations")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("WebProjekat.Models.Flight", b =>
                {
                    b.HasOne("WebProjekat.Models.Airline")
                        .WithMany("Flights")
                        .HasForeignKey("AirlineId");
                });

            modelBuilder.Entity("WebProjekat.Models.FlightMark", b =>
                {
                    b.HasOne("WebProjekat.Models.Flight")
                        .WithMany("Marks")
                        .HasForeignKey("FlightId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebProjekat.Models.User")
                        .WithMany("FlightMarks")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("WebProjekat.Models.FriendRequest", b =>
                {
                    b.HasOne("WebProjekat.Models.User")
                        .WithMany("Friends")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("WebProjekat.Models.ReservedSeat", b =>
                {
                    b.HasOne("WebProjekat.Models.Flight")
                        .WithMany("ReservedSeats")
                        .HasForeignKey("FlightId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebProjekat.Models.User")
                        .WithMany("ReservedSeats")
                        .HasForeignKey("UserId");
                });

            modelBuilder.Entity("WebProjekat.Models.SeatReservationRequest", b =>
                {
                    b.HasOne("WebProjekat.Models.ReservedSeat", "ReservedSeat")
                        .WithMany()
                        .HasForeignKey("ReservedSeatId");

                    b.HasOne("WebProjekat.Models.User")
                        .WithMany("SeatReservationRequests")
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
