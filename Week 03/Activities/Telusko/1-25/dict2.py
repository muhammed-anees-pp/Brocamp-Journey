key = [1,2,3]
names = ["Anees","Ajvad","Sajid"]
new = dict(zip(key,names))
print(new)

new[4]="Hilal"
print(new)
del new[2]
print(new)

id(key)

dictonary = {1:"Ajvad", 2:"Sajid"}
print(dictonary.keys())