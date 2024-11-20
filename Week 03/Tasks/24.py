pantry = {
    "chicken": 500,
    "lemon": 2,
    "cumin": 24,
    "paprika": 18,
    "chilli powder": 7,
    "yogurt": 300,
    "oil": 450,
    "onion": 5,
    "garlic": 9,
    "ginger": 2,
    "tomato puree": 125,
    "almonds": 75,
    "rice": 500,
    "coriander": 20,
    "lime": 3,
    "pepper": 8,
    "egg": 6,
    "pizza": 2,
    "spam": 1,
}

recipes = {
    "Butter chicken": [
        "chicken",
        "lemon",
        "cumin",
        "paprika",
        "chilli powder",
        "yogurt",
        "oil",
        "onion",
        "garlic",
        "ginger",
        "tomato puree",
        "almonds",
        "rice",
        "coriander",
        "lime",
    ],
    "Chicken and chips": [
        "chicken",
        "potatoes",
        "salt",
        "malt vinegar",
    ],
    "Pizza": [
        "pizza",
    ],
    "Egg sandwich": [
        "egg",
        "bread",
        "butter",
    ],
    "Beans on toast": [
        "beans",
        "bread",
    ],
    "Spam a la tin": [
        "spam",
        "tin opener",
        "spoon",
    ],
}

def check_ingredients(recipe):
    for item in recipes[recipe]:
        if pantry.get(item, 0) < 1:
            print(f"Not enough {item} in the pantry.")
            return False
    return True

def cook_recipe(recipe):
    if check_ingredients(recipe):
        print(f"Cooking {recipe}...")
        for item in recipes[recipe]:
            pantry[item] -= 1
        print(f"{recipe} is ready!")
    else:
        print(f"Cannot cook {recipe} due to insufficient ingredients.")

def main():
    while True:
        print("\n--- Available Recipes ---")
        for index, recipe in enumerate(recipes, start=1):
            print(f"{index}. {recipe}")

        choice = input("Enter the number of the recipe to cook (or 'q' to quit): ")
        if choice.lower() == 'q':
            print("Exiting program.")
            break
        try:
            recipe_index = int(choice) - 1
            if 0 <= recipe_index < len(recipes):
                recipe = list(recipes.keys())[recipe_index]
                cook_recipe(recipe)
            else:
                print("Invalid recipe number.")
        except ValueError:
            print("Please enter a valid number or 'q' to quit.")

if __name__ == "__main__":
    main()
