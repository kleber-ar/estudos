class Employee:
  def __init__(self, id, name):
    self.id = id
    self.name = name


class HashMap:
  def __init__(self):
    self._buckets = [[] for i in range(10)]

  def get_address(self, id):
    return id % 10
  
  def insert(self, employee):
    address = self.get_address(employee.id)
    self._buckets[address].append(employee)

  def get_value(self, id):
        address = self.get_address(id)
        for item in self._buckets[address]:
            if item.id_num == id:
                return item.name
        return None
  
  def has(self, id):
    address = self.get_address(id)
    return self._buckets[address] is not None
  
  def update_value(self, id_num, new_value):
        address = self.get_address(id_num)
        employee = self._buckets[address]
        employee.name = new_value
  
if __name__ == "__main__":

    employees = [(14, 'name1'), (23, 'name2'), (10, 'name3'), (9, 'name4')]
    registry = HashMap()

    for id_num, name in employees:
        employee = Employee(id_num, name)
        registry.insert(employee)

    print(registry.get_value(23))

    print(registry.get_value(10))
    registry.update_value(10, "name30")
    print(registry.get_value(10))
