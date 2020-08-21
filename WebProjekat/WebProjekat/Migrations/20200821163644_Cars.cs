using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebProjekat.Migrations
{
    public partial class Cars : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Location = table.Column<string>(nullable: true),
                    PricePerDay = table.Column<int>(nullable: false),
                    NumberOfSeats = table.Column<int>(nullable: false),
                    BabaySeats = table.Column<int>(nullable: false),
                    Brand = table.Column<string>(nullable: true),
                    Year = table.Column<int>(nullable: false),
                    Model = table.Column<string>(nullable: true),
                    RentCarCompanyId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cars_RentCarCompanies_RentCarCompanyId",
                        column: x => x.RentCarCompanyId,
                        principalTable: "RentCarCompanies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cars_RentCarCompanyId",
                table: "Cars",
                column: "RentCarCompanyId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cars");
        }
    }
}
