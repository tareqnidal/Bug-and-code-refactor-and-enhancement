"""
Your code has a few errors, but don’t worry,
I’m here to help! Here’s a corrected version:
"""


class Person:

    def __init__(self, first_name, last_name):
        self.first = first_name
        self.last = last_name

    def speak(self):
        print("My name is " + self.first + " " + self.last)


me = Person("Brandon", "Walsh")
you = Person("Ethan", "Reed")

me.speak()
you.speak()


"""
Here are the changes I made:

The keyword to define a class in Python is class, not classy.
The method to initialize a class in Python is __init__, not __initalize__.
In your __init__ method, you used lname instead of last_name.
In your speak method, you used self.fname and self.last, but the instance
variables you defined were self.first and self.last.
The print statement in your speak method was missing parentheses.
The call to you.speak was written as you.self.speak,
which would cause an error.
Keep practicing, and you’ll get the hang of it!

"""
