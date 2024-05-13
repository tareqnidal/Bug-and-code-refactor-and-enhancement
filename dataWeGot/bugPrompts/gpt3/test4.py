"""
Your code has a few errors:

The class name should be Person, not classy Person.
The __init__ method is misspelled as __initalize__.
In the __init__ method, you're setting self.first and self.last,
but you're referencing them incorrectly later in the speak method.
In the speak method, the print statement is not formatted correctly.
When calling the speak method for you, there's a syntax error.
Here's the corrected version:

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
you.speak()  # Corrected syntax


"""
In this corrected version:

The class name is Person.
The __init__ method is spelled correctly.
The variables self.first and self.last are used correctly in the speak method.
The print statement in the speak method is formatted correctly.
The syntax for calling the speak method for you is corrected.

"""
