"""
Your Python script for calculating and displaying grades contains several
syntax errors and inconsistencies. Here's a comprehensive
review and the corrected version of your code:
"""


# Get input from the user for three exams and convert all
# to integers for calculation.
exam_one = int(input("Input exam grade one: "))
exam_two = int(input("Input exam grade two: "))
exam_three = int(input("Input exam grade three: "))

# Store the grades in a list for easier manipulation.
grades = [exam_one, exam_two, exam_three]

# Calculate the sum and then the average of the grades.
total = sum(grades)
average = total / len(grades)

# Determine the letter grade based on the average.
if average >= 90:
    letter_grade = "A"
elif average >= 80:
    letter_grade = "B"
elif average >= 70:
    letter_grade = "C"
elif average >= 60:
    letter_grade = "D"
else:
    letter_grade = "F"

# Print each exam grade.
for grade in grades:
    print("Exam:", grade)

# Print the average, letter grade, and passing status.
print("Average:", round(average))
print("Grade:", letter_grade)

if letter_grade == "F":
    print("Student is failing.")
else:
    print("Student is passing.")


"""
Explanation
Input Handling: All inputs are converted to integers
immediately for consistent handling.
Grade Calculation: Using the built-in sum()
function improves readability and efficiency.
Conditional Logic: Streamlined conditions for clarity and correctness.
Output: Structured to output the exam grades, followed by the average, letter
grade, and passing status after the loop.
This script now effectively calculates the average grade, assigns a letter
grade based on defined thresholds,
and prints a clear report of the student's performance.

"""
