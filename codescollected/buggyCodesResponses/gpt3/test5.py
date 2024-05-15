"""
Your code has several syntax errors and logical issues.
Here are the corrections and suggestions:

In several places, you have syntax errors in your code, such as missing commas
and colons.
There are logical errors in calculating the average and determining the letter
grade.
There's a typo in the variable names (exam_3 instead of exam_three).
There's an issue with the loop variable (for grade in grade), and the variable
grdes is misspelled.
The if-elif statements for grading don't cover all cases properly.
The conditional statements for determining passing/failing need correction.
There are missing parentheses in the print statements.
Here's the corrected version:
"""

exam_one = int(input("Input exam grade one: "))
exam_two = int(input("Input exam grade two: "))
exam_three = int(input("Input exam grade three: "))

grades = [exam_one, exam_two, exam_three]
sum = 0
for grade in grades:
    sum += grade

avg = sum / len(grades)

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
and grading logic are corrected.
Variable names are consistent.
Conditional statements for determining passing/failing are fixed.
print statements are corrected with parentheses.
Looping through the grades is done correctly.

"""
