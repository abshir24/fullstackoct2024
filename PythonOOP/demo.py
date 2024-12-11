class Car:
    def __init__(self,make,model,weight,price,year):
        self.make = make
        self.model = model
        self.weight = weight
        self.price = price
        self.year = year
    
    def printCarInfo(self):
        print("Weight: ", self.weight)
        print("Make: ", self.make)
        print("Model: ", self.model)
        print("Price: ", self.price)
        print("Year: ", self.year)

    
car1 = Car("Toyota","Camry",3197,28000,2024)
car2 = Car("Honda","Accord",3197,28000,2024)

car1.printCarInfo()
car2.printCarInfo()