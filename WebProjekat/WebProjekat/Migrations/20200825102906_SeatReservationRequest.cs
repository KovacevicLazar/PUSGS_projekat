using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebProjekat.Migrations
{
    public partial class SeatReservationRequest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReservedSeats_Flights_FlightId",
                table: "ReservedSeats");

            migrationBuilder.AlterColumn<int>(
                name: "FlightId",
                table: "ReservedSeats",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "SeatReservationRequests",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: true),
                    ReservedSeatId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SeatReservationRequests", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SeatReservationRequests_ReservedSeats_ReservedSeatId",
                        column: x => x.ReservedSeatId,
                        principalTable: "ReservedSeats",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_SeatReservationRequests_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SeatReservationRequests_ReservedSeatId",
                table: "SeatReservationRequests",
                column: "ReservedSeatId");

            migrationBuilder.CreateIndex(
                name: "IX_SeatReservationRequests_UserId",
                table: "SeatReservationRequests",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ReservedSeats_Flights_FlightId",
                table: "ReservedSeats",
                column: "FlightId",
                principalTable: "Flights",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReservedSeats_Flights_FlightId",
                table: "ReservedSeats");

            migrationBuilder.DropTable(
                name: "SeatReservationRequests");

            migrationBuilder.AlterColumn<int>(
                name: "FlightId",
                table: "ReservedSeats",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_ReservedSeats_Flights_FlightId",
                table: "ReservedSeats",
                column: "FlightId",
                principalTable: "Flights",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
