class Home:
    def __init__(self):
        pass

    def room1(self):
        width = 100
        breadth = 100
        print('Area of Room 1:', width * breadth)

    def kitchen(self):
        width = 1222
        breadth = 4888
        print('Area of Kitchen:', width * breadth)

    def bedroom(self):
        width = 150
        breadth = 200
        print('Area of Bedroom:', width * breadth)

    def bathroom(self):
        width = 50
        breadth = 75
        print('Area of Bathroom:', width * breadth)


class FirstHome(Home):
    def study_room(self):
        width = 120
        breadth = 100
        print('Area of Study Room:', width * breadth)


class SecondHome(Home):
    def work_area(self):
        width = 200
        breadth = 150
        print('Area of Work Area:', width * breadth)


def main():
    print("Details of First Home:")
    first_home = FirstHome()
    first_home.room1()
    first_home.kitchen()
    first_home.bedroom()
    first_home.bathroom()
    first_home.study_room()
    
    print("\nDetails of Second Home:")
    second_home = SecondHome()
    second_home.room1()
    second_home.kitchen()
    second_home.bedroom()
    second_home.bathroom()
    second_home.work_area()

main()
