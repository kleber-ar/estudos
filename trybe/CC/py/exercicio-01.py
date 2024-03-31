def bigger(a, b):
  if a > b:
    return b
  return a



def mean(numbers):
  total = 0
  for number in numbers:
    total += number
  return total / len(numbers)



def draw_square(n):
  for row in range(n):
    print(n * '*')



def find_biggest_name(names):
  biggest_name = names[0]
  for name in names:
      if len(name) > len(biggest_name):
          biggest_name = name
  return biggest_name



def paint_cost(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price



import math

def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price



def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"



def minimum(numbers):
   return min(numbers)

# ou mesmo
minimum = min



def draw_triangle(n):
    for row in range(1, n + 1):
        print(row * '*')



def summation(limit):
    return sum(range(1, limit + 1))



def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total