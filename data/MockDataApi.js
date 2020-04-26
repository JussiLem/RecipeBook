import { recipes, categories, ingredients } from './mockData';

export const getCategoryById = categoryId => {
    let category;
    categories.map(data => {
        if (data.id === categoryId) {
            category = data;
        }
    });
    return category;
};

export const getCategoryName = categoryId => {
    let name
    categories.map(data => {
        if (data.id === categoryId) {
            name = data.name;
        }
    });
    return name;
};

export const getIngredientName = ingredientID => {
    let name;
    ingredients.map(data => {
        if (data.ingredientId === ingredientID) {
            name = data.name;
        }
    });
    return name;
};

export const getAllIngredients = idArray => {
    const ingredientsArray = [];
    idArray.map(index => {
        ingredients.map(data => {
            if (data.ingredientId === index[0]) {
                ingredientsArray.push([data, index[1]]);
            }
        });
    });
    return ingredientsArray;
};
