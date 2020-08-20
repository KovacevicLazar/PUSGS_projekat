using Microsoft.EntityFrameworkCore.Migrations;

namespace WebProjekat.Migrations
{
    public partial class UserAtributes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Last_name",
                table: "Users",
                newName: "Surname");

            migrationBuilder.RenameColumn(
                name: "First_name",
                table: "Users",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "City",
                table: "Users",
                newName: "Address");

            migrationBuilder.AddColumn<int>(
                name: "Role",
                table: "Users",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Role",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "Users",
                newName: "Last_name");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Users",
                newName: "First_name");

            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Users",
                newName: "City");
        }
    }
}
