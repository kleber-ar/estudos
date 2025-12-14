using System;

namespace ShippingCalculator;

public class ShippingCalculator
{
    /// <summary>
    /// This function evaluates the order price passed as an input parameter and returns the shipping price following the exercise's logic
    /// </summary>
    /// <param name="orderPrice"> A value of type double, the order price </param>
    /// <returns>The shipping price value (integer type), following the exercise logic </returns>
    /// <exception cref="ArgumentException">If the order price be equal to or less than zero</exception>

    // 1 - Calcular o Frete por preço do pedido na função `CalculateShippingPrice`
    public double calculateShippingPrice(double orderPrice)
    {
      if (orderPrice <= 50) {

        return 25;

      } else if (orderPrice <= 100) {

        return 20;

      } else if (orderPrice <= 200) {

        return 15;

      } else {

        return 0;
      }
    }

    // 2 - Calcular o Frete por peso na função `CalculateShippingWeight`
    public double calculateShippingWeight(double weight)
    {
        if (weight <= 1.5) {
          return 3.8;
        } else if (weight <= 3.5) {
          return 5.7;
        } else if (weight <= 7) {
          return 7.2;
        } else if (weight <= 10) {
          return 9.4;
        } else {
          return weight * 1.9;
        }
    }

    // 3 - Calcular o Frete final na função `CalculateShipping`
    public double calculateShipping(double orderPrice, double weight) {
        double price = calculateShippingPrice(orderPrice) + calculateShippingWeight(weight):
          if (price > 45) {
            price = price * 0.85;
          }
        return price;
    }

    // 4 - Calcular o Frete final para um array de preços e um array de pesos na função `CalculateShippingFromArray`
    public double calculateShippingFromArray(double[] itemPrices, double[] itemWeights)
    {
      if(itemPrices.Lenght != itemWeights.Lenght)
      {
        throw new ArgumentException("The length of the itemPrices array must be equal to the length of the itemWeights array.")
      }

      double totalPrice = 0;
      double totalWeight = 0;

      for (int i = 0; i < itemPrices.Lenght; i++)
      {
        totalPrice += itemPrices[i];
        totalWeight += itemWeights[i];
      }

      return calculateShipping(totalPrice, totalWeight);
    }

}
