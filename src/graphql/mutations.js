/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      photo_url
      recipes {
        items {
          id
          title
          photo_url
          time
          description
        }
        nextToken
      }
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      photo_url
      recipes {
        items {
          id
          title
          photo_url
          time
          description
        }
        nextToken
      }
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      photo_url
      recipes {
        items {
          id
          title
          photo_url
          time
          description
        }
        nextToken
      }
    }
  }
`;
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
      id
      title
      photo_url
      time
      description
      category {
        id
        name
        photo_url
        recipes {
          nextToken
        }
      }
      ingredient {
        items {
          id
          recipeID
          photo_url
          name
        }
        nextToken
      }
      photos {
        items {
          id
          url
        }
        nextToken
      }
    }
  }
`;
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
      id
      title
      photo_url
      time
      description
      category {
        id
        name
        photo_url
        recipes {
          nextToken
        }
      }
      ingredient {
        items {
          id
          recipeID
          photo_url
          name
        }
        nextToken
      }
      photos {
        items {
          id
          url
        }
        nextToken
      }
    }
  }
`;
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
      id
      title
      photo_url
      time
      description
      category {
        id
        name
        photo_url
        recipes {
          nextToken
        }
      }
      ingredient {
        items {
          id
          recipeID
          photo_url
          name
        }
        nextToken
      }
      photos {
        items {
          id
          url
        }
        nextToken
      }
    }
  }
`;
export const createPhoto = /* GraphQL */ `
  mutation CreatePhoto(
    $input: CreatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    createPhoto(input: $input, condition: $condition) {
      id
      url
      photos {
        id
        title
        photo_url
        time
        description
        category {
          id
          name
          photo_url
        }
        ingredient {
          nextToken
        }
        photos {
          nextToken
        }
      }
    }
  }
`;
export const updatePhoto = /* GraphQL */ `
  mutation UpdatePhoto(
    $input: UpdatePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    updatePhoto(input: $input, condition: $condition) {
      id
      url
      photos {
        id
        title
        photo_url
        time
        description
        category {
          id
          name
          photo_url
        }
        ingredient {
          nextToken
        }
        photos {
          nextToken
        }
      }
    }
  }
`;
export const deletePhoto = /* GraphQL */ `
  mutation DeletePhoto(
    $input: DeletePhotoInput!
    $condition: ModelPhotoConditionInput
  ) {
    deletePhoto(input: $input, condition: $condition) {
      id
      url
      photos {
        id
        title
        photo_url
        time
        description
        category {
          id
          name
          photo_url
        }
        ingredient {
          nextToken
        }
        photos {
          nextToken
        }
      }
    }
  }
`;
export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
      id
      recipeID
      photo_url
      recipe {
        id
        title
        photo_url
        time
        description
        category {
          id
          name
          photo_url
        }
        ingredient {
          nextToken
        }
        photos {
          nextToken
        }
      }
      name
    }
  }
`;
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
      id
      recipeID
      photo_url
      recipe {
        id
        title
        photo_url
        time
        description
        category {
          id
          name
          photo_url
        }
        ingredient {
          nextToken
        }
        photos {
          nextToken
        }
      }
      name
    }
  }
`;
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
      id
      recipeID
      photo_url
      recipe {
        id
        title
        photo_url
        time
        description
        category {
          id
          name
          photo_url
        }
        ingredient {
          nextToken
        }
        photos {
          nextToken
        }
      }
      name
    }
  }
`;
