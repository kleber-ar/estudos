namespace PaintShop;

// 3 - Crie uma classe estática PaintUtilities
public static class PaintUtilities
{
    public static int BucketSizeLiters { get; set; } = 20;
    public static int SquareMetersPerLiter { get; set; } = 10;

    public static int SquareMetersPerBucket { get {
        return SquareMetersPerLiter * BucketSizeLiters;
    }}

    public static int GetNeededPaintBuckets(double area) {
        return Convert.ToInt32(Math.Ceiling(area / SquareMetersPerBucket));
    }

    public static int GetNeededPaintBuckets(Wall wall) {
        return Convert.ToInt32(Math.Ceiling(wall.PaintableArea / SquareMetersPerBucket));
    }

    public static int GetNeededPaintBuckets(Room room) {
        double totalArea = 0;
        foreach(var wall in room.walls)
        {
            totalArea += wall.PaintableArea;
        }
        return Convert.ToInt32(Math.Ceiling(totalArea / SquareMetersPerBucket));
    }

    public static decimal CalculateCost(decimal price, double area) {
        return price * GetNeededPaintBuckets(area);
    }

    public static decimal CalculateCost(decimal price, Wall wall) {
        return price * GetNeededPaintBuckets(wall);
    }

    public static decimal CalculateCost(decimal price, Room room) {
        return price * GetNeededPaintBuckets(room);
    }
}
