using System;

public class Greeting
{
    public static string Greet()
    {
        return "Olá, Mundo!";
    }

    public static string GreetTryber()
    {
        return "Seja bem-vindo, Tryber!";
    }
}

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine(Greeting.Greet());
        Console.WriteLine(Greeting.GreetTryber());
    }
}
