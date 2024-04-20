class Hierarchy:
    def __init__(self, k):
        self.subordinates = {}
        self.scores = {}
        self.k = k

    def fit_person(self, boss, person):
        if not boss:
            self.subordinates[person] = []
            self.scores[person] = 1
            return

        self.scores[boss] += 1

        if len(self.subordinates[boss]) < self.k:
            self.subordinates[boss].append(person)
            self.subordinates[person] = []
            self.scores[person] = 1
        else:
            self.fit_person(self.subordinates[boss][0], person)

        # Atualiza os scores de todos os superiores da nova pessoa
        current_boss = boss
        while current_boss:
            self.scores[current_boss] += 1
            current_boss = self.find_new_boss(current_boss, person)

    def find_new_boss(self, current_boss, person):
        if len(self.subordinates[current_boss]) < self.k:
            return current_boss
        else:
            return self.find_new_boss(self.subordinates[current_boss][0], person)

if __name__ == "__main__":
    hierarchy = Hierarchy(2)
    hierarchy.fit_person(None, 1)
    hierarchy.fit_person(1, 2)
    hierarchy.add_person(1, 3)
    hierarchy.fit_person(2, 4)
    hierarchy.fit_person(4, 5)
    hierarchy.fit_person(4, 6)
    hierarchy.fit_person(5, 7)
    print("\nAntes das novas inserções")
    print(f"Subordinados: {hierarchy.subordinates}")
    print(f"Scores: {hierarchy.scores}")

    hierarchy.fit_person(4, 8)
    hierarchy.fit_person(4, 9)
    print("\nApós novas inserções")
    print(f"Subordinados: {hierarchy.subordinates}")
    print(f"Scores: {hierarchy.scores}")
