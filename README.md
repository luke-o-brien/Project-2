## ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive
# Fishwatch API React App
### Link to Live site https://fishwatch.netlify.app/
### Project overview 

This Project Involved building a multipage front-end React web app which utilises one or more RestAPIs. For our project we created an fish informational site which used the Fishwatch and Edamam API. This site takes information from the Fishwatch API and displays information about different species; it also uses the Edamam API to show recipes which helps users to make more sustainable fish choices when cooking. This was a pair project with my work focused on the fish of the day component, which displayed a different fish to the user each day, making use of local storage. I also created the page which utilised the Edamam API.

### Technologies used 
* HTML
* CSS
* Javascript 
* React 
* Bulma 

### Project Brief 
- build a React application** that consumes a public API.
- Consume a public API – this could be anything but it must make sense for your project.
- The app should include a router - with several "pages".
- Include wireframes** - that you designed before building the app.
- Have semantically clean HTML - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.

### Code Installation:
1. Clone or download the repo
2. Install dependencies in terminal with command: npm i 
Start server with terminal command: npm start

### Planning and Whiteboarding


We started by brainstorming ideas for the project and we created brief outlines of a shortlisted options. We decided that the fish project was of interest to both of us and the fishWatch API was one of the most detailed that we had found. Once we had settled on this we began to whiteboard and create wireframes. We discussed what features we would like our project to have and how and what would be achievable in the timeframe we had. After creating the wireframes we spent some time dividing up what needed to be created between us. 

<img src="src/assets/Screenshot 2022-07-24 at 13.17.26.png" position/></img>
<img src="src/assets/Screenshot 2022-07-24 at 13.18.06.png" position/></img>
<img src="src/assets/Screenshot 2022-07-24 at 13.18.21.png" position/></img>

### Working Methods
Following the planning and whiteboarding stage. My partner Dan and I began the project working together setting up the initial file and structure of the app. This included the app.js file with the router and routes, home pages and a start up CSS file. We also jointly set up and tested the function for making API calls and storing the data as this would be key for both of us to work on our respective sections.

After the initial set up, we decided that we would work separately on different sections so that each person could specialise in one area whilst maximising the limited time we had to complete the project. Dan took responsibility for the creation of the fish index and the individual fish pages. I began my work with the fish of the day element as this was a core part of our landing page and required working out logic. Following this I moved on to integrating our second API which was the Edamam recipe API. This involved registering for the API services, reading documentation to understand how the API worked and then writing the code which would allow the API to be called and have the response rendered on the page.

Throughout the project, we kept in contact via zoom calls and slack. We had regular stand ups to update each other on our progress and to let the other know if we had hit any roadblocks or found any bugs. If we did find that we were stuck on an issue or needed to do debugging, we would work together to solve the issue.

### Challenge one - Daily Fish
One of the components that I took responsibility for was the daily fish component on the landing page. To get this component working there were a couple of options which I explored to get this working. The first was on the first load of the webpage of the day the api would return the next fish object in the array that the API returned. I also looked into a way of getting the same fish displayed for all users on each day even if they were accessing it from different devices, However I decided to use local storage and randomly return a fish each day. The reason I chose this method was it was achievable within the time allotted and it would be more maintainable in the long as it did not require hardcoding fish to dates and would be less susceptible to changes in the API data. 

The first function I wrote to implement this feature made use of the browser's local storage to help determine if a new fish needed to be produced. 


``` js

  let currentDate = "00/00/0000"
  const [displayFish, setDisplayFish] = useState(undefined);

  useEffect(() => {
    
    function getDate() {
      currentDate = new Date().toLocaleDateString();
      if (localStorage.getItem("date") === null || localStorage.getItem("current fish" === null)) {
        localStorage.setItem("date", currentDate);
        localStorage.setItem("current fish", "")
        getRandom()
      } else if (localStorage.getItem("date") === currentDate) {
        const getFish = localStorage.getItem("current fish")
        const storageFish = JSON.parse(getFish)
        setDisplayFish(storageFish)
      } else {
        getRandom()
      }
    } 
```
I started by declaring a current date variable which was in date format but not a valid date. When the page loaded the getDate function would run. It would start by updating the current date variable with the date which the user opened the page, To get this i used the Date and localdatestring methods. I then wrote an if statement. If there was no date already stored in local storage or no fish data currently stored then it would create a localstorage item and set it to the value of the current date variable, as well as creating an empty fish property before calling the getrandom function. 

if the date in local storage was equal to the current date meaning that the user had already loaded the page that day then the function get the already stored fish from local storage and parses the data to valid and readable JSON data before updating the fishdisplay state which will allow it to render on the page. If neither of these is true which should not be the case then the getrandom function is called.

``` Js 
    async function getRandom () {
      const fishdex = Math.floor(Math.random() * 115);
      const res = await fetch("https://cryptic-everglades-76066.herokuapp.com/https://www.fishwatch.gov/api/species")
      const data = await res.json()
      const dailyfish = data[fishdex]
      setDisplayFish(dailyfish)
      localStorage.setItem("current fish", JSON.stringify(dailyfish));
      const updateDate = new Date().toLocaleDateString();
      localStorage.setItem("date", updateDate)
      
    }
    getDate()
  }, [])
```

The GetRandom function firstly selects a random number between 0 and 115 (the number of fish in the API at the time of creation). It then makes a call to the api which returns all fish and the fishdex variable is then used to locate and return the object at that index. The function will set this in state and make sure that it is in a usable Json format before finally updating the date in the state. One of the weaknesses in this function is that if the number of fish in the API changes, especially if fish are removed there is potential for the function to return an object which doesn't exist. A more sustainable method would be for the function to loop through the objects in the array the API returns and determine the length and then use that as the multiplied value in the random number function. 

### Challenge Two - Suggested Recipes

The Second component which I was responsible for making was the suggested alternatives to help users make better choices when cooking. I decided to hard code the alternatives based on research I had done. I made this choice as the Fishwatch API did not have data that could be used to achieve this. I decided to use the Edamam Recipe API for this component as it had an extensive amount of data and included a number of options for adding queries on to the end of the API request, which would be useful if we wanted to develop the site at a later state to give the user more control over what recipes they wanted returned. This API was a challenge to use for two reasons. Firstly, the API's which I had interacted with previously were simple get requests. However this one included queries which I had not worked with before which required me to spend time reading the API's documentation to familiarise myself with how these worked. 

The second reason that this was challenging was This was the first API which I had used that was protected with authorization and therefore I needed to read the documentation to work out how to append this to the api call to allow this to work properly. 

The third problem which I faced in creating this component was with the buttons to view more recipes. Initially I set this up using a display state which toggled and set to true when the user clicked on display recipes. The problem which this created was that all recipe divs would expand rather than just the one which the user had clicked on. To fix this I created three pieces of state relating to each of the fish. 


``` js 
  const [hake, setHake] = React.useState(false)
  const [trout, setTrout] = React.useState(false)
  const [mussels, setmussels] = React.useState(false)
```

Then within the handleclick function i created a variable which was assigned the value of the button the user clicked on. I then wrote if statements which checked what the value of the clicked button was and if the value matched what was within the condition then the state would be toggled.
``` js 
 function handleClick(e) {
    const selected = e.target.value 
    if (selected === "hake") {
      setHake(!hake)
    } else if (selected === "trout") {
      setTrout(!trout)
    } else if (selected === "mussels") {
      setmussels(!mussels)
    }
``` 
This state being toggled would be stored and then used in the react return as part of a conditional rendering statement. If the fish state was true and the fetched state which was set to true once data had been received by the API then the page would expand that div and display the recipes leaving the others collapsed.

``` js 
fetched && hake && recipes.map((recipe) =>{
```
### Project Screenshots 

<img src="src/assets/Screenshot 2022-07-23 at 23.51.05.png" position/></img>
<img src="src/assets/Screenshot 2022-07-23 at 23.51.19.png" position/></img>
<img src="src/assets/Screenshot 2022-07-23 at 23.51.37.png" position/></img>
<img src="src/assets/Screenshot 2022-07-23 at 23.52.13.png" position/></img>

### Wins
- Completed our first pair project and we were able to create a multi page react app which consumed two third party APIs and displayed data from these in different forms within our web application. 
- Created a working fish of the day element which made use of the fishwatch API and the browsers localstorage to display information about a different fish at random if the user visits the page on a different day. 
- Managed to integrate a second API into the project to enable us to display recipes. Making use of query parameters to set certain parameters with some of these being hard coded into the project and type of the fish being altered by the user input. 

### Lessons Learnt 
- How to make use of documentation. Throughout this project I was using both API documentation along with react and bulma documentation to get a better understanding of how each of these worked and how I could use them to achieve my project aims.
- The importance of Git. This was the first time I had worked on a repository with another person and I have gained both a greater understanding of Git as well as learning the importance of committing and pushing work to avoid conflicts that may overwrite or affect another person's work. 
- I have greatly improved my communication skills during this project. It was essential that we both kept in frequent communication so we each knew what we were working on and if we were facing any problems which may impact on the timeline of the project or on the work the other was working on. 

### Possible Future Developments
- Instead of recipes linking out to external sites I would create a react component which would render these on our site similar to the fish.
- Using local storage give the user the ability to save favourite fish or favourite recipes and have a page where the user can view the items which they have saved
- continue developing the UI bringing the recipe pages up to the same standards as the fish UI and developing this further to make it more aesthetically pleasing for the user to use.
