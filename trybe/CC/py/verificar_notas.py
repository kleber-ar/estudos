recovery_students = []

with open("notas.txt") as grades_file:
  for line in grades_file:
    student_grade = line
    student_grade = student_grade.split(" ")
    if int(student_grade[1]) < 6:
      recovery_students.append(student_grade[0] + " " + student_grade[1])

with open("recuStudents.txt", mode="w") as recovery_students_file:
  print(recovery_students)
  recovery_students_file.writelines(recovery_students)