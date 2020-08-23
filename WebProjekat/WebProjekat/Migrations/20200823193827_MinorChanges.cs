using Microsoft.EntityFrameworkCore.Migrations;

namespace WebProjekat.Migrations
{
    public partial class MinorChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Brand",
                table: "CarReservations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "CarReservations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Model",
                table: "CarReservations",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Brand",
                table: "CarReservations");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "CarReservations");

            migrationBuilder.DropColumn(
                name: "Model",
                table: "CarReservations");
        }
    }
}
