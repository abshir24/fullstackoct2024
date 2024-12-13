import random

class BigCat:
    def __init__(self):
        self.speed = 5
        self.strength = 5
        self.intelligence = 5
        self.health = 5
        self.durability = 5

class Lion(BigCat):
    def __init__(self):
        super().__init__()
        self.strength = 50
        self.health = 50

    
    def king(self,bigcat):
        if( isinstance(bigcat, Cheetah) ):
            random_number = random.randint(1,10)

            if(random_number <= 6):
                print("Cheetah has left unscathed")
                return
            
            bigcat.speed = 0
            bigcat.strength = 0
            bigcat.intelligence = 0
            bigcat.health = 0
            bigcat.durability = 0

class Leopard(BigCat):
    def __init__(self):
        super().__init__()
        self.strength = 30
        self.health = 30
        self.intelligence = 30
    
    def attack(self, bigcat):
        if( isinstance(bigcat,Lion) ):
            bigcat.king( self )
            return
        
        if( isinstance(bigcat, Cheetah) ):
            random_number = random.randint(1,10)
            if(random_number <= 6):
                print("Cheetah has left unscathed")
                return

        bigcat.health -= 15


class Cheetah(BigCat):
    def __init__(self):
        self.strength = 25
        self.health = 25
        self.intelligence = 25
        self.durability = 25
        self.speed = 75
    
    def run(self, bigcat):
        if( isinstance(bigcat,Lion) ):
            bigcat.king( self )
            return
        
        if( isinstance(bigcat, Leopard) ):
            bigcat.attack( self )
            return 