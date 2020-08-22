using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebProjekat.Migrations
{
    public partial class flights : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Flights",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FlyingFrom = table.Column<string>(nullable: true),
                    FlyingTo = table.Column<string>(nullable: true),
                    DateDepart = table.Column<DateTime>(nullable: false),
                    DateArrival = table.Column<DateTime>(nullable: false),
                    FlightDistance = table.Column<int>(nullable: false),
                    VacantSeats = table.Column<int>(nullable: false),
                    BusySeats = table.Column<int>(nullable: false),
                    TicketPrice = table.Column<int>(nullable: false),
                    FirstStop = table.Column<string>(nullable: true),
                    SecondStop = table.Column<string>(nullable: true),
                    ThirdStop = table.Column<string>(nullable: true),
                    AirlineId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Flights", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Flights_Airlines_AirlineId",
                        column: x => x.AirlineId,
                        principalTable: "Airlines",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Flights_AirlineId",
                table: "Flights",
                column: "AirlineId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Flights");
        }
    }
}
