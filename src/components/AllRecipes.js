import React from 'react';
import RecipesList from "./RecipesList";
import TagList from "./TagList";
import {graphql, useStaticQuery} from "gatsby";

const query = graphql`
{
  allContentfulRecipe(filter: {featured: {eq: true}}) {
    nodes {
      prepTime
      servings
      cookTime
      title
      description {
        description
      }
      id
      content {
        tags
      }
      image {
        gatsbyImageData
      }
    }
  }
}
`

function AllRecipes() {
    const data = useStaticQuery(query);
    const recipes = data.allContentfulRecipe.nodes;

    return (
        <section className="recipes-container">
            <TagList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </section>
    );
}

export default AllRecipes;