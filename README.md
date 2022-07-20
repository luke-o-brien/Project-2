## ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive
# Fishwatch API



- Project overview 
- Technologies used 
- Project Brief 
- Planning,whiteboarding and working methods
- Challenge one - Daily Fish 
- Challenge Two - Suggested Recipes
- Known Bugs 
- Lessons Learnt 
- Future development



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
One of the componants that I took responsibility was the daily fish componant on the landing page. 

``` js

function Dailyfish() {

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

### Challenge Two - Suggested Recipes


### Known Bugs

### Lessons Learnt 
- How to make use of documentation. Throughout this project I was using both API documentation along with react and bulma documentation to get a better understanding of how each of these worked and how i could use them to achieve my project aims.
- The importance of Git. This was the first time I had worked on a respository with another person and I have gained both a greater understanding of Git as well as learning the importance of committing and pushing work to avoid conflicts that may overwrite or affect another persons work. 
- I have greatly improved my communication skills during this project it was essetial that we both kept in frequent communication so we each knew what we were working on and if we were facing any problems which may impact on the timeline of the project or on the work the other was working on. 
### Future developments
- Adding a 
