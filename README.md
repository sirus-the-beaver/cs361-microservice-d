# Wine Recommendation Microservice

## Overview
This microservice handles getting wine recommendations based on a dish, ingredient, or cuisine input, and getting dish recommendations based on a wine type input.

## Features
- Getting wine recommendations
- Getting dish recommendations based on wine type

## Tech Stack
- Node.js, Express
- **Communication**: REST API
- **API**: [Spoonacular API](https://spoonacular.com/food-api)
- **Deployment**: Heroku

## API Documentation
### Base URL
```https://dishfindr-microservice-d-96299d64d5d1.herokuapp.com```

### Endpoints
```POST /wine-recommendation```
- **Description**: Gets wine recommendations based on a dish, ingredient, or cuisine.
- **Request Body**:
```json
{
    "food": "String"
}
```
- **Response**:
```json
{
    "pairedWines": ["String"],
    "pairingText": "String",
    "productMatches": [
        {
            "id": Number,
            "title": "String",
            "averageRating": Number,
            "description": "String",
            "imageUrl": "String",
            "link": "String",
            "price": "String",
            "ratingCount": Number,
            "score": Number
        }
    ]
}
```

```POST /dish-recommendation```
- **Description**: Gets dish recommendations based on a wine type.
- **Request Body**:
```json
{
    "wine": "String"
}
```
- **Response**:
```json
{
    "pairings": ["String"],
    "text": "String"
}
```