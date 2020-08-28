using Microsoft.EntityFrameworkCore.Migrations;

namespace WebProjekat.Migrations
{
    public partial class CarCompanyMark : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_RentCarCompanies_RentCarCompanyId",
                table: "Cars");

            migrationBuilder.AddColumn<int>(
                name: "Mark",
                table: "RentCarCompanies",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "RentCarCompanyId",
                table: "Cars",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_RentCarCompanies_RentCarCompanyId",
                table: "Cars",
                column: "RentCarCompanyId",
                principalTable: "RentCarCompanies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_RentCarCompanies_RentCarCompanyId",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "Mark",
                table: "RentCarCompanies");

            migrationBuilder.AlterColumn<int>(
                name: "RentCarCompanyId",
                table: "Cars",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_RentCarCompanies_RentCarCompanyId",
                table: "Cars",
                column: "RentCarCompanyId",
                principalTable: "RentCarCompanies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
