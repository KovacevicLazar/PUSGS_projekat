using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebProjekat.Migrations
{
    public partial class CarAndAirlineCompanies : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AirlineComnpanyId",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CarCompanyId",
                table: "Users",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Airlines",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    CompanyName = table.Column<string>(nullable: true),
                    Adress = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Airlines", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RentCarCompanies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    CompanyName = table.Column<string>(nullable: true),
                    Adress = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RentCarCompanies", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_AirlineComnpanyId",
                table: "Users",
                column: "AirlineComnpanyId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_CarCompanyId",
                table: "Users",
                column: "CarCompanyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Airlines_AirlineComnpanyId",
                table: "Users",
                column: "AirlineComnpanyId",
                principalTable: "Airlines",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_RentCarCompanies_CarCompanyId",
                table: "Users",
                column: "CarCompanyId",
                principalTable: "RentCarCompanies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Airlines_AirlineComnpanyId",
                table: "Users");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_RentCarCompanies_CarCompanyId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Airlines");

            migrationBuilder.DropTable(
                name: "RentCarCompanies");

            migrationBuilder.DropIndex(
                name: "IX_Users_AirlineComnpanyId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_CarCompanyId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "AirlineComnpanyId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "CarCompanyId",
                table: "Users");
        }
    }
}
