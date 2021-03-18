### Newsletter App

This App will render the latest news from the world, I'm using NewsAPI which provides me endpoints to fetch the data in real time. Create 
React App Boilerplate provided me startup files to develop this app, then I cleaned that project and started to code. Developing process 
started with creating Header and Footer components with all child components nested in it. 

At first, the data was static by copying the output from Postman or any simillar program and stored in the top level componenet state. That 
state is passed to child components to map through all state items (prop-drilling). Secondly, axios was installed with npm and used to fetch
the data from News API, this API allows us to fetch the data 100 times per one day if you are logged as the developer in it. 

React Router Dom was also installed with npm and it is used to Switch between different Routes depending on the Link that was clicked. Then, 
every Route reuses the same components, Header and all child components, ArticlesBox and Article component where the data will be passed 
using props and then rendered and at the end Footer and its child components. The Spinner component is introduced to show the users the data 
buffering (the screen cant be without content while fetching data from api). 

Later, the app will be optimized even for 1300px, 1100px, 750px and 410px (mobile) width screen.

App will use:
1. React (React Router, React Hooks, React JSX, React Link, React Props, React Stats and more)
2. Context Api 
3. SCSS, GoogleFonts, FontAwesome and Bootstrap
4. Git and Postman

Requirements List:
1. App must contain a home page for all articles grouped by categories which News API provides
2. Each category must be clickable and lead to category page where all articles from that category can be read
3. The app must have a search filter on the home page or category page
4. The app should have a button that must be clickable and by clicking it number of rendered articles from each category should be
doubled
5. By clicking on each article, app must lead the user to the article url provided by News API
6. By clicking on the button located in the sidebar of the page of each category, it is possible to open or close the sidebar
### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

