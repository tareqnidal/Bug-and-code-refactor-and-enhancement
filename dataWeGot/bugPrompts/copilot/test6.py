"""
The error message indicates that there’s a 
syntax error in the arithmetic expression.
The expression 5 0 -  2 2 /  2 0 /  8 4 is not a valid arithmetic expression
due to the spaces between the digits of numbers.

In Python, numbers must be written without spaces between the digits.
So, 50 - 22 / 20 / 84 would be a valid arithmetic expression,
but 5 0 - 2 2 / 2 0 / 8 4 is not.

You might want to modify your generate_question function to ensure that there
are no spaces within the numbers. For example, you could generate each number
(without spaces) and operator separately, and then join them with spaces.
This would ensure that the generated arithmetic expressions are always valid.
Keep coding! 😊
"""
