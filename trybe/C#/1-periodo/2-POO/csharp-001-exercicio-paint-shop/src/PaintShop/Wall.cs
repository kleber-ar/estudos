namespace PaintShop;

public class Wall
{
    // Width com get implícito e set explícito
    public double Width
    {
        get;
        set
        {
            if (value > 0)
            {
                field = value;
            }
            else
            {
                field = 1;
            }
        }
    }

    // Height com get implícito e set explícito
    public double Height
    {
        get;
        set
        {
            if (value > 0)
            {
                field = value;
            }
            else
            {
                field = 1;
            }
        }
    }

    // ExcludedArea com get e set implícitos
    public double ExcludedArea { get; set; }

    // PaintableArea sem set e com get explícito
    public double PaintableArea
    {
        get
        {
            return (Width * Height) - ExcludedArea;
        }
    }

    // Construtor
    public Wall(double width, double height)
    {
        Width = width;
        Height = height;
    }
}
