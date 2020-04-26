/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto {
    onCreatePhoto {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto {
    onUpdatePhoto {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto {
    onDeletePhoto {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
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
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient {
    onUpdateIngredient {
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
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient {
    onDeleteIngredient {
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
