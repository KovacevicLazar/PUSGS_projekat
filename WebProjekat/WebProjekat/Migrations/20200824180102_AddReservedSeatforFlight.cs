using Microsoft.EntityFrameworkCore.Migrations;

namespace WebProjekat.Migrations
{
    public partial class AddReservedSeatforFlight : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReservedSeat_Users_UserId",
                table: "ReservedSeat");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ReservedSeat",
                table: "ReservedSeat");

            migrationBuilder.RenameTable(
                name: "ReservedSeat",
                newName: "ReservedSeats");

            migrationBuilder.RenameIndex(
                name: "IX_ReservedSeat_UserId",
                table: "ReservedSeats",
                newName: "IX_ReservedSeats_UserId");

            migrationBuilder.AddColumn<int>(
                name: "FlightId",
                table: "ReservedSeats",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ReservedSeats",
                table: "ReservedSeats",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_ReservedSeats_FlightId",
                table: "ReservedSeats",
                column: "FlightId");

            migrationBuilder.AddForeignKey(
                name: "FK_ReservedSeats_Flights_FlightId",
                table: "ReservedSeats",
                column: "FlightId",
                principalTable: "Flights",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ReservedSeats_Users_UserId",
                table: "ReservedSeats",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ReservedSeats_Flights_FlightId",
                table: "ReservedSeats");

            migrationBuilder.DropForeignKey(
                name: "FK_ReservedSeats_Users_UserId",
                table: "ReservedSeats");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ReservedSeats",
                table: "ReservedSeats");

            migrationBuilder.DropIndex(
                name: "IX_ReservedSeats_FlightId",
                table: "ReservedSeats");

            migrationBuilder.DropColumn(
                name: "FlightId",
                table: "ReservedSeats");

            migrationBuilder.RenameTable(
                name: "ReservedSeats",
                newName: "ReservedSeat");

            migrationBuilder.RenameIndex(
                name: "IX_ReservedSeats_UserId",
                table: "ReservedSeat",
                newName: "IX_ReservedSeat_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ReservedSeat",
                table: "ReservedSeat",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ReservedSeat_Users_UserId",
                table: "ReservedSeat",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
