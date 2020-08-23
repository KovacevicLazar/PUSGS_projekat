using Microsoft.EntityFrameworkCore.Migrations;

namespace WebProjekat.Migrations
{
    public partial class CarReservationUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CarReservation_Cars_CarId",
                table: "CarReservation");

            migrationBuilder.DropForeignKey(
                name: "FK_CarReservation_Users_UserId",
                table: "CarReservation");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CarReservation",
                table: "CarReservation");

            migrationBuilder.RenameTable(
                name: "CarReservation",
                newName: "CarReservations");

            migrationBuilder.RenameColumn(
                name: "LastDayOfReservaton",
                table: "CarReservations",
                newName: "ReturnDate");

            migrationBuilder.RenameColumn(
                name: "FirstDayOfReservaton",
                table: "CarReservations",
                newName: "PickupDate");

            migrationBuilder.RenameIndex(
                name: "IX_CarReservation_UserId",
                table: "CarReservations",
                newName: "IX_CarReservations_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_CarReservation_CarId",
                table: "CarReservations",
                newName: "IX_CarReservations_CarId");

            migrationBuilder.AddColumn<int>(
                name: "NumberOfDays",
                table: "CarReservations",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_CarReservations",
                table: "CarReservations",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CarReservations_Cars_CarId",
                table: "CarReservations",
                column: "CarId",
                principalTable: "Cars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CarReservations_Users_UserId",
                table: "CarReservations",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CarReservations_Cars_CarId",
                table: "CarReservations");

            migrationBuilder.DropForeignKey(
                name: "FK_CarReservations_Users_UserId",
                table: "CarReservations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CarReservations",
                table: "CarReservations");

            migrationBuilder.DropColumn(
                name: "NumberOfDays",
                table: "CarReservations");

            migrationBuilder.RenameTable(
                name: "CarReservations",
                newName: "CarReservation");

            migrationBuilder.RenameColumn(
                name: "ReturnDate",
                table: "CarReservation",
                newName: "LastDayOfReservaton");

            migrationBuilder.RenameColumn(
                name: "PickupDate",
                table: "CarReservation",
                newName: "FirstDayOfReservaton");

            migrationBuilder.RenameIndex(
                name: "IX_CarReservations_UserId",
                table: "CarReservation",
                newName: "IX_CarReservation_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_CarReservations_CarId",
                table: "CarReservation",
                newName: "IX_CarReservation_CarId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CarReservation",
                table: "CarReservation",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CarReservation_Cars_CarId",
                table: "CarReservation",
                column: "CarId",
                principalTable: "Cars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CarReservation_Users_UserId",
                table: "CarReservation",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
