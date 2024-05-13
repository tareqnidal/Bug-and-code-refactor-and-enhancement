"""
What's Done Well:
Randomness: The use of the random module to create variability in the
questions generated (both in terms of operators and operands)
is effective for creating a diverse set of arithmetic problems.
String Manipulation: The manipulation of strings to format the arithmetic
expression is done creatively, ensuring operators and
operands are correctly formatted.Areas for Improvement:
Safety Concerns:
Using eval() can be dangerous, especially when it's used to evaluate strings
that contain input from an external source. In this context, since the input
is generated within the script and is numeric operations only, it's less risky,
but it's still a practice best avoided. Consider replacing eval() with a safer
alternative, such as ast.literal_eval() or
a custom parser for arithmetic expressions.Edge Case Handling:
There are scenarios where your generated questions might
end with an operator followed by "=", e.g., "23 + =".
This will raise an error when evaluated.
Ensure the generation logic avoids such outcomes.
The script sometimes generates questions like "1000/0 =",
which leads to a division by zero error.
Implement checks to prevent division by zero.
Code Optimization:
The loop that adds spaces around operators can be more efficiently
implemented using regular expressions or
list comprehensions for readability and performance.
The final formatting before adding "=" could be more
streamlined and integrated into the main generation loop.
Readability:
Variables and functions are well-named,
but the overall complexity can be reduced to make the code easier to follow.

"""
import random as rn

operators = ['+', '-', '*', '/']
max_length = 10


def generate_question():
    question_parts = []
    while sum(len(str(x)) for x in question_parts) < max_length:
        term = rn.randint(1, 100)
        if question_parts and isinstance(question_parts[-1], int):
            operator = rn.choice(operators)
            if operator == '/' and term == 0:  # Avoid division by zero
                continue
            question_parts.append(operator)
        question_parts.append(term)

    # If last part is an operator, replace it with a number
    if isinstance(question_parts[-1], str):
        question_parts[-1] = rn.randint(1, 100)

    question = ' '.join(str(x) for x in question_parts) + " ="
    return question


def answer_question(newquestion):
    try:
        # Strip '=' before evaluation
        answer = eval(newquestion[:-1])
        return answer
    except Exception as e:
        return f"error: {str(e)}"


question = generate_question()
print("Question:", question)

result = answer_question(question)
print("Result:", result)
