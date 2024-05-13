import random as rn

operators = ['+', '-', '*', '/']
max_length = 10


def generate_question():
    string_length = rn.randint(3, max_length)
    question = ""
    while len(question) < string_length:
        term = str(rn.randint(1, 1000))
        question += term
        if len(question) < string_length:
            operator = rn.choice(operators)
            question += operator

    for term in operators:
        if term in question:
            break
    else:
        question = question[:-1] + rn.choice(operators) + question[-1]

    if question[-1] in operators:
        question = question[:-1] + " ="
    else:
        question += " ="

    for term in range(len(question) - 1, -1, -1):
        if question[term] in operators:
            question = question[:term] + " " + question[term] + " " + question[term + 1:]

    return question


def answer_question(newquestion):
    try:
        answer = eval(newquestion)
        return answer
    except Exception as e:
        return f"error: {str(e)}"


question = generate_question()
print("Question:", question)

result = answer_question(question)
print("Result:", result)
