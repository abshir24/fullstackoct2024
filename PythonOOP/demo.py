class Vehicle: #This is the parent class
    def __init__(self, weight, base_speed):
        print("Parent Constructor")
        self.weight = weight

        self.base_speed =  base_speed

    def printVehicleStats(self):
        print("Weight: " , self.weight, "Base Speed: ", self. base_speed)

 
class Car(Vehicle):
    def __init__(self, weight, base_speed, make, model):
        print("Child Constructor")
        self.make = make
        self.model = model

        super().__init__(weight,base_speed)
    
    

car1 = Car(2957,140,"Tesla","Model X")

car1.printVehicleStats()
