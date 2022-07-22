## ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive
# Fishwatch API



- Project overview 
- Technologies used 
- Project Brief 
- Planning,whiteboarding and working methods
- Challenge one - Daily Fish 
- Challenge Two - Suggested Recipes
- Lessons Learnt 
- Future developments



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



### Planning,whiteboarding and Working Methods

We started by brainstorming ideas for the project and we created brief outlines of a shortlisted options. We decided that the fish project was of interest to both of us and fishWatch API was one of most detailed that we had found. Once we had settled on this we began to whiteboard and create wireframes. We discussed what features we would like our project to have and how and what would be achievable in the timeframe we had. After creating the wireframes we spent some time dividing up what needed to be created between us. 

We began the project working together setting up the inital file and structure of the app. We also jointly set up and tested the function for making API calls and storing the data as this would be key for both of us to work on our respective sections. 

After the inital set up we decided that we would work seperatly on different sections so that each person could specilize in one area whilst maximising our time. Throughout the project we kept in contact via zoom calls and slack. We had regular stand ups to update each other on our progress and to let the other know if we had hit any roadblocks or found any bugs. If we did find that we were stuck on an issue or needed to do debugging we would work together to solve the issue. 

### Challenge one - Daily Fish
One of the componants that I took responsibility was the daily fish componant on the landing page. To get this componant working there were a couple of option which I explored to get this working. The first was on the first load of the webpage of the day the api would return the next fish object in the array that the API returned. I also looked into a way of getting the same fish displayed for all users on each day even if they were acessing it from different devices, However i decided to use local storage and randomly return a fish each day. The reason I chose this method was it was achievable within the time allotted and it would be more maintainable in the long as it did not require hardcoding fish to dates and would be less suscuptible to changes in the API data. 

The first function i wrote to implement this feature made use of the browsers local storage to help determine if a new fish needed to be produced. 

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
I started by declaring a current date variable which was in date format but not a valid date. When the page loaded the getDate function would run. It would start by updating the current date variable with the date which the user opened the page, To get this i used the Date and localdatestring methods. I then wrote an if statement. If there was no date already stored in local storage or no fishdata currently stored then it would create a localstorage item and set it to the value of the current date variable, as well as creating an empty fish property before calling the getrandom function. 

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

The GetRandom function firstly selects a random number between 0 and 115 (the number of fish in the API at the time of creation). It then makes a call to the api which returns all fish and the fishdex variable is then used to locate and return the object at that index. The function will set this in state and make sure that it is in a usable Json format before finally updating the date in the state. One of the weaknesses in this function is that if the number of fish in the API changes especially if fish are removed there is potential for the function to return a object which doesn't exist. A more sustainable method would be for the function to loop through the objects in the array the API returns and determine the length and then use that as the multiplied value in the random number function. 

### Challenge Two - Suggested Recipes



### Lessons Learnt 
- How to make use of documentation. Throughout this project I was using both API documentation along with react and bulma documentation to get a better understanding of how each of these worked and how i could use them to achieve my project aims.
- The importance of Git. This was the first time I had worked on a respository with another person and I have gained both a greater understanding of Git as well as learning the importance of committing and pushing work to avoid conflicts that may overwrite or affect another persons work. 
- I have greatly improved my communication skills during this project it was essetial that we both kept in frequent communication so we each knew what we were working on and if we were facing any problems which may impact on the timeline of the project or on the work the other was working on. 

### Future developments
- Instead of recipes linking out to external sites I would create a react componant which would render these on our site similar to the fish. 
- Using local storage give the user the ability to save favorite fish or favorite recipes and have a page where the user can view the items which they have saved 
- continue developing the UI bringing the recipe pages up to the same standards as the fish UI and developing this further to make it more athsteically pleasing for the user to use.
