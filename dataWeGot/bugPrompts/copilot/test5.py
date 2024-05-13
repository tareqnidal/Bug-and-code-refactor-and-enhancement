"""
Your code is a good start, but there are several errors and improvements
that could be made. Here’s a corrected version:
"""
exam_one = int(input("Input exam grade one: "))
exam_two = int(input("Input exam grade two: "))
exam_three = int(input("Input exam grade three: "))

grades = [exam_one, exam_two, exam_three]
total = 0
for grade in grades:
    total = total + grade

avg = total / len(grades)

if avg >= 90:
    letter_grade = "A"
elif avg >= 80:
    letter_grade = "B"
elif avg >= 70:
    letter_grade = "C"
elif avg >= 60:
    letter_grade = "D"
else:
    letter_grade = "F"

for grade in grades:
    print("Exam: " + str(grade))

print("Average: " + str(avg))
print("Grade: " + letter_grade)

if letter_grade == "F":
    print("Student is failing.")
else:
    print("Student is passing.")


"""
Here are the changes I made:

The input function in Python always returns a string, so you need to convert
exam_two and exam_three to integers using int().
In the grades list, you need to separate the items with commas.
In the for loop, you should iterate over grades, not grade.
You misspelled grades as grdes when calculating the average.
In your if/elif statements, you don’t need to check the upper bound of the
range because the elif statement will only be reached if the previous
conditions were False. You used a single quote to start a string but ended it
with a double quote. Python strings need to start and end with the same type
of quote. In the elif statement for the “F” grade, you don’t need a condition
because it’s the last possible option. You used is to compare letter_grade to
“F”, but you should use == for comparison in Python. The print statements need
to be enclosed in parentheses. Keep practicing, and you’ll get the hang of it!

"""
