using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebProjekat.Migrations
{
    public partial class CarMark : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CarReservations_Cars_CarId",
                table: "CarReservations");

            migrationBuilder.AlterColumn<int>(
                name: "CarId",
                table: "CarReservations",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsOver",
                table: "CarReservations",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Mark",
                table: "CarReservations",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "CarMarks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    mark = table.Column<int>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    CarId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarMarks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CarMarks_Cars_CarId",
                        column: x => x.CarId,
                        principalTable: "Cars",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CarMarks_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CarMarks_CarId",
                table: "CarMarks",
                column: "CarId");

            migrationBuilder.CreateIndex(
                name: "IX_CarMarks_UserId",
                table: "CarMarks",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_CarReservations_Cars_CarId",
                table: "CarReservations",
                column: "CarId",
                principalTable: "Cars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CarReservations_Cars_CarId",
                table: "CarReservations");

            migrationBuilder.DropTable(
                name: "CarMarks");

            migrationBuilder.DropColumn(
                name: "IsOver",
                table: "CarReservations");

            migrationBuilder.DropColumn(
                name: "Mark",
                table: "CarReservations");

            migrationBuilder.AlterColumn<int>(
                name: "CarId",
                table: "CarReservations",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_CarReservations_Cars_CarId",
                table: "CarReservations",
                column: "CarId",
                principalTable: "Cars",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
