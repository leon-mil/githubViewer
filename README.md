Using routing service

Routing:
1. Routing allows us to manage multiple views in application. Its essential feature for building large apps because 
you can allow user to navigate between diffirent screens.
2. We can pass paramaters between controllers that manage our screens.
3. Tap into the browsers back and forward buttons so that the browsers history is in sync with users location in our application.
 
Routing based on URL:
Routing engine captures request
Routing rules render a response

Routing with Angular:
- Depends on another module: angular-route.js
  This will give us access to a diffirent module "ng-route". 
  Our existing module will take dependency on "ng-route".
  We will configure routing rules into a routing engine.
- Configure rules into $routeProvider
  Have to tell a routing engine how a particular URL appears in the browser.
  Need to use a component "$routeProvider"
  It has an API that describes how URL looks like and what to do for that URL
  For each URL we can specify a templateURL that is HTML file that angular has to go and find and then load up for that route.
  Optionally: a "controller" that should be used to manage that template.

  Example:
    $routerProvider
      .when("/main", {
        templateUrl: "main.html",
        contoller: "MainController" 
      })

  And because a routing engine has to take that template and load it into a display we will need to reorg our app and default index.html file.
  Default html file will become a layout view. 
- Setup a layout view
  Markup view that exists on every page of our application containing common features such as a navigation menu or a footer.
  If we have 2 templates such as User.html and Repo.html. We will tell the routing engine where to place those templates in our application
  by using "ng-view" directive on html element and thats where angular will insert the template when we are at the right URL.
  Now our application is flexiable. It can support any number of contollers and templates and and routing engine will swap them in and out.
  Routing engine  will also coordinate with the browers history so if the user clicks on the back or forward button they will navigate inside our application.

  Testing github repository