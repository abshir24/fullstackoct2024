class Boxer:
    def __init__(self, height, strength, wins, losses):
        self.height = height
        self.strength = strength
        self.wins = wins 
        self.losses = losses
    
    def printStats(self):
        print("****************************************************************")
        print("Height:", self.height)
        print("Strength:", self.strength)
        print("Wins:", self.wins)
        print("Losses:", self.losses)
        print("****************************************************************")

boxer1 = Boxer(181,99,10,0)
boxer2 = Boxer(180,98,9,1)

print("Boxer 1 Stats:")
boxer1.printStats()

print("Boxer 2 Stats:")
boxer2.printStats()

user_input = int( input("Which boxer would you like to bet on. Select 1 or 2") )

boxer1_total = (boxer1.height + boxer1.strength) * (boxer1.wins/( boxer1.wins + boxer1.losses))
boxer2_total = (boxer2.height + boxer2.strength) * (boxer2.wins/( boxer2.wins + boxer2.losses))
winning_boxer = 0

if(boxer1_total > boxer2_total):
    winning_boxer = 1
else:
    winning_boxer = 2

if(user_input == winning_boxer):
    print("You won! Here is your 2 million dollars!")
else: 
    print("Sorry you lost! Please pay the house 1 million dollars!")