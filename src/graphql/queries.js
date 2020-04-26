/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        photo_url
        recipes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
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
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
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
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        photos {
          id
          title
          photo_url
          time
          description
        }
      }
      nextToken
    }
  }
`;
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
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
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recipeID
        photo_url
        recipe {
          id
          title
          photo_url
          time
          description
        }
        name
      }
      nextToken
    }
  }
`;
