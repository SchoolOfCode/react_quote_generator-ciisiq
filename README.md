# React: Quote Generator App

<img src="./ReadMeImages/changePageLayout1.png">


# Goal's & Task's:
## 👉  React : front-end

- Understand and use Components
- Understand and use props
- Understand and use state/useState
- Understand and use onChange & onClick
- Understand and use Async & Fetch 
<br>  
 Create a Quote Generator with api below


---
## 👉  Node & Express : Back-end
- Understand and setup Routes/express/postman
- Understand and use postgreSQL
- Understand and use heroku database/hosting
<br>  
 Create a quotes database with express and routes
---
## 👉FrontEnd & Backend 

- Putting them both together to make a full stack app
---
<br>  
<br>  
<br>  
<br>  

<h1 align="center">Front-End-React</h1>

 <h4 align="center">Component-Layout-Tree</h4>

```
  -src
   -components

    -App
      - App.js

    -Header
      - Header.js

    -Main
      - Main.js

    -QuoteHeading
      - QuoteHeading.js

    -Button
      - Button.js
```

## Make sure to do regular git commits to see how you are getting on. 

👉 1a. Layout Each folder and file for you components as above.
 
<br>
 
👉 1b. Make sure to add a "ClassName" to each jsx element so you can Style each one in app.css

<br>

<h3 align="center"> ( Time to code ) </h3>


👉 Create a handleClick function inside your app.js that console logs the word '**hello World**' , then pass down that function handleClick as a prop to the Button.js component.

👉 inside Button.js add an onClick event  that calls  the function HandleClick that was passed down as a prop.
###### (  do npm run start & click the button to see if it logs in the console )

<br>
👉Change the handleClick function in app.js to be an async function handleClick, then write out a fetch request that gets a qoute from this api.

<br>

``` https://api.kanye.rest ```

<br>

  
  If you need help making a fetch request use this link to show you how 

  https://dmitripavlutin.com/javascript-fetch-async-await/

Make sure to console log your data from your api to make sure you are getting back data.

👉Above your Async Function create a useState that is instially set to an empty object.


👉pass the useState to your main.js component as a prop and render it in the JSX/HTML

Once you click the button you should get a new Qoute each time on the page.

💥BONUS TASK:
  Try to re-create it again without looking at this guide.











