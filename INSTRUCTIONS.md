
# AulaTunes - Raphael Lopes

[Demo](https://aula-tech-test.herokuapp.com/albums)

## Prerequisites
- Node 15.x
- NPM 7.x


## Running the project 

### Node

```
# install the dependencies
yarn

# start the project
yarn start
```

The project will be available on [localhost:3000](http://localhost:3000/)


### Docker

If you have docker and docker-compose you can use the options below:

#### for development
```
docker-compose up -d --build
```
The project will be available on [localhost:3000](http://localhost:3000/)


#### production build
```
docker-compose -f docker-compose.prod.yml up -d --build
```
The project will be available on [localhost](http://localhost:80/)


### Tests
```
# for development with watch
yarn test

# to see the coverage
yarn test:coverage
```


## How it works
  - The site lists the top 100 albums using the iTunes API
  - The site has 3 pages: `albuns`, `songs` and `favorites`
  - When the user clicks a card from the `albums` or `songs` page, it is selected as `favorite` and its color changes
  - When the user clicks a card in the `favorites` page, it is removed from favorites
  - The search bar can be used on all pages and a clear button appears after text has been entered.
  -  The site is responsive. On mobile the entries are displayed a single row list. When the screen is `768px` or higher the entries are displayed in a three-row grid
  
