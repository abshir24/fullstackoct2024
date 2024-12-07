class Car:
    topspeed = 200
    location = 0

    def printTopSpeed(self):
        print("Top speed:", self.topspeed)
    
    def drive(self):
        self.location += 10
        print("You have driven 10 miles")
    
    def stop(self):
        print("The total distance for this trip is: ", self.location)


car1 = Car()

car1.drive()
car1.drive()
car1.drive()
car1.drive()

car1.stop()