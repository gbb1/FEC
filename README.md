<div align="center"><img src="https://i.ibb.co/qY0CVz3/Group-15.png" alt="Group-15" border="0" width="60%"/> </div>

<div align="center">
Shop products, see multiple styles and similar items, plus questions, answers, and reviews from other customers.
</div>

## Tech Stack
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&logoColor=black&style=for-the-badge)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

## Table of Contents
* [Usage](#usage)
* [Requirements](#requirements)
* [Features](#features)
  - [Overview](#overview)
  - [Related Products](#related-products)
  - [Questions and Answers](#questions-and-answers)
  - [Ratings and Reviews](#ratings-and-reviews)

### Overview:

In the product overview, site visitors can:

![alt text](https://github.com/gbb1/FEC/blob/main/overviewGifs/ImagesGif.gif)
- Navigate through multiple images via an image carousel
- View and zoom in on images of different clothing items
  - In the expanded view, zooming will follow mouse movement


![alt text](https://github.com/gbb1/FEC/blob/main/overviewGifs/thumbnailGif.gif)
- Preview images in the carousel with scrollable thumbnails
  - Buttons will dynamically render that allow users to scroll up and down through the thumbnails
  - Thumbnail scroll will track the user's most relevant recent interaction, whether with the style options, image carousel, or other thumbnails


![alt text](http://g.recordit.co/cdWYH2w1cs.gif)
- Explore different styles, and see which items are on sale


![alt text](http://g.recordit.co/pwhRT0bewT.gif)
- Checkout by choosing a size and quantity of items
  - all size and quantity options are specific to the selected item
- Favorite an item


![alt text](http://g.recordit.co/u37ynXMQfC.gif)
- View the page in dark mode


### Related Products:

https://user-images.githubusercontent.com/105718650/218283700-2f1b82a3-0701-4fdf-8586-e69c3cb73f49.mp4

- View and navigate related products and their outfits
  - All products are designed as card, and contained in a carousel
  - The carousel will always scroll to the exact edge at the last card, in both directions
  - The carousel is reponsive to window resize, debounced to prevent unnecessary state change
  - The appearance and hover effect change corresponding to the dark mode


https://user-images.githubusercontent.com/105718650/218283716-0652efec-40c9-4843-834b-6d0907bdd1f3.mp4

- Interect with any related product
  - The comparison table will show up when the star button at the top right corner of the card is clicked
  - The comparison table juxtapose features between current product and the related product clicked
  - The comparison table will close when mouse clicked on anywhere besides it
  - When any product card is clicked, the carousel will reset position and webpage will re-render correspondingly
  - Comparison table change its look corresponding to the dark mode

https://user-images.githubusercontent.com/105718650/218283719-2f77490f-3827-4f6c-92d4-9e69b8a4d4f1.mp4

- Manipulate the "My Outfit" section
  - User may add the current product by pressing the first unique "Add to Outfit" card
  - User may remove any previously added product by click the "X" button at the top right corner of the card
  - "My outfit" is synced to each user's LocalStorage, so upon refresh or browser restart, data will persist

### Questions and Answers:

Questions and Answers provide an interactive way to learn more about a product.
 In the Questions and Answers section, users can :

 ![alt text](QuestionsAnswersGif/first.gif)


- Search the question bank and any matching result(s) will render below
    - if there are no matches, the user will be given a message that there are no results and they can add their own question
- Users can add questions using the Add Question button which will open a modal and once submitted, on refresh the         question will be added
- Users can also add answers to asked questions using the Add Answer button on the side of the question and another modal will pop up
- Both of these modals have form validation and will not be submitted until the user fills out all the required information
- If a seller responds to a question, this answer will be at the top and seller will be bold to let the user know that the information is accurate



![alt text](QuestionsAnswersGif/secondgif.gif)

- Users can also click on pictures to zoom in


![alt text](QuestionsAnswersGif/darkmodeshowcase.gif)

- Users can also report answers and they will be removed from view and be passed on for revision
- If the website is too bright for the user, they can toggle on dark mode
- In dark mode the questions and answers have a barely visible outline that the naked eye can't see but it creates a contrast that is less strenuous on the eyes and brings out the question and answer on the darker background



### Ratings and Reviews:

![alt text](gifs/reviewGifs/reviewslistgif.gif)

In the 'Ratings and Reviews' section, site visitors can:
- Filter and/or sort reviews
  - Filter reviews by star rating
    - Icons will indicate current active filters
    - Clicking on the icons will remove the corresponding filter
  - Filter reviews by search term
    - Clicking on the search icon will reveal a search input element
      - Will filter reviews based on the search term and highlight the corresponding term
    - Sort reviews via a drop down menu
      - Sort by relevance, date created (newest), or helpfulness
      - Upon switching sort mode, the reviews list will automatically scroll to the top
- Expand and navigate reviews
  - Upon click, the list will expand will expand to its maximum size and enable an infinite scroll feature

![alt text](gifs/reviewGifs/photomodalgif.gif)

- Expand and view photos
  - Upon image click, an image carousel will appear where the user can navigate through the photos attached to the review
- Add a review
  - Upon click, a form modal will appear allowing the user to submit a review
  - Added images may be removed by clicking on them
  - A final validation check will run upon submit to ensure all mandatory requirements have been met

![alt text](gifs/reviewGifs/darkmodegif.gif)

- Dark mode implementation
