"""
Your code appears to generate a random arithmetic expression as a question and
then evaluates it to obtain the result. Here are some thoughts:

Clarity and Readability: The code is relatively clear and readable. Variable
names are descriptive, and the logic is straightforward to follow.
Safety: Using eval() can be risky, especially if the input can come from an
untrusted source. It allows execution of arbitrary code, which can be a
security vulnerability. However, in this specific case, since you're
generating the arithmetic expression internally and not taking user input
directly, the risk is minimal. Still, it's a good practice to avoid eval()
when possible.
Error Handling: You're using a try-except block to catch exceptions raised
during evaluation. This is good practice, but it would be even better to
handle specific exceptions rather than catching all exceptions. For instance,
you could catch ZeroDivisionError separately to provide a more specific error
message.
Logic: The logic for generating the question seems sound. You're randomly
choosing the length of the expression and the operators, ensuring that at
least one operator is present.
Comments: Adding comments explaining the logic behind certain steps could
improve the code's readability, especially for someone unfamiliar with it who
might come across it later.
Separation of Concerns: Consider separating the code responsible for
generating the question and the code responsible for evaluating it into
distinct functions. This can improve modularity and make the code easier to
understand and maintain
"""

import random as rn

OPERATORS = ['+', '-', '*', '/']
MAX_LENGTH = 10


def generate_question():
    string_length = rn.randint(3, MAX_LENGTH)
    question = ""
    while len(question) < string_length:
        term = str(rn.randint(1, 1000))
        question += term
        if len(question) < string_length:
            operator = rn.choice(OPERATORS)
            question += operator

    for term in OPERATORS:
        if term in question:
            break
    else:
        question = question[:-1] + rn.choice(OPERATORS) + question[-1]

    if question[-1] in OPERATORS:
        question = question[:-1] + " ="
    else:
        question += " ="

    for term in range(len(question) - 1, -1, -1):
        if question[term] in OPERATORS:
            question = question[:term] + " " + question[term] + " " + question[term + 1:]

    return question


def answer_question(newquestion):
    try:
        answer = eval(newquestion)
        return answer
    except ZeroDivisionError:
        return "error: Division by zero"
    except Exception as e:
        return f"error: {str(e)}"


if __name__ == "__main__":
    question = generate_question()
    print("Question:", question)

    result = answer_question(question)
    print("Result:", result)
