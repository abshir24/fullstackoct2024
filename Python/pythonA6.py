import random

user_input = int( input("Pick a number between 1 and 6") )

dice_roll = random.randint(1, 6)

number_of_trys = 1

while user_input != dice_roll:
    print("Wrong guess try again!")

    number_of_trys += 1

    user_input = int( input("Pick a number between 1 and 6") )

    dice_roll = random.randint(1, 6)

print("You have successfully rolled a ", user_input, ". Great game. It only took you ", number_of_trys, " tries!")

