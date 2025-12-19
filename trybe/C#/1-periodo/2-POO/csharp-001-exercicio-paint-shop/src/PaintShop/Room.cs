namespace PaintShop;

// 2 - Crie uma classe Room
public class Room
{
   public Wall[] walls { get; }
    public double TotalPaintableArea {
        get { 
            double totalArea = 0;
            foreach(var wall in walls)
            {
                totalArea += wall.PaintableArea;
            }
            return totalArea;
        }
    }

    public Room(params Wall[] walls)
    {
        this.walls = walls;
    }
}
