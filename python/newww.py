age=input("AGE: ")
is_student=input("if student yes/no?")
is_student=is_student.strip()
is_student=is_student.lower()
age=int(age)
discount=age>25 and is_student=='yes'
print("eligible for discount" if discount else "you are not eligible")
print