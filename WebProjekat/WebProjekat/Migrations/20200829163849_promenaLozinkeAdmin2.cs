using Microsoft.EntityFrameworkCore.Migrations;

namespace WebProjekat.Migrations
{
    public partial class promenaLozinkeAdmin2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isConfirmed",
                table: "RentCarCompanies");

            migrationBuilder.DropColumn(
                name: "isConfirmed",
                table: "Airlines");

            migrationBuilder.AddColumn<bool>(
                name: "isConfirmed",
                table: "Users",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isConfirmed",
                table: "Users");

            migrationBuilder.AddColumn<bool>(
                name: "isConfirmed",
                table: "RentCarCompanies",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "isConfirmed",
                table: "Airlines",
                nullable: false,
                defaultValue: false);
        }
    }
}
