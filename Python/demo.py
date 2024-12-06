import random
computer_dice_roll = random.randint(1, 6)
print(computer_dice_roll)
count = 1


def dice_roll():
    user_dice_roll = int(input("Choose a number between 1 to 6: "))
    count += 1
    if user_dice_roll != computer_dice_roll:
        count += 1
        print("Try again!")
        dice_roll()
            
    
    elif user_dice_roll == computer_dice_roll:
        count += 1
        print(f"You have successfully rolled {computer_dice_roll} in {count} try!")


dice_roll()
 