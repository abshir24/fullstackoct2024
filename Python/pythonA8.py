def calculate(x,y):
    return (3 * x) + (5 * y)

# print ("The calculated result is :", calculate(3,4))

# Part 2

hours_worked = int ( input("How many hours have you worked this week?") )
hourly_rate  = int ( input("What is your hourly rate?") )
base_pay = 0
over_time_pay = 0

if( hours_worked < 40 ):
    base_pay = hours_worked * hourly_rate
    print("Regular Pay: ", base_pay )
elif( hours_worked > 40 ):
    over_time_hours = hours_worked - 40 
    over_time_pay = ( hourly_rate * 1.5 ) * over_time_hours
    base_pay = 40 * hourly_rate
    print("Regular Pay: ", base_pay )
    print("Overtime Pay: ", over_time_pay)
else:
    base_pay = 40 * hourly_rate
    print("Regular Pay: ", base_pay )
    
    
print("Total Pay: ", base_pay + over_time_pay)
