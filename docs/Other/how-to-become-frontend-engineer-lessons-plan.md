# Junior front-end engineer road map

## Lesson 1 

Time to complete: 100 hours

Create new branch "lesson-1" in your git. Make 4 commits (description is below) in it.
push every commit when it will be ready to the lesson-1 branch in gitHub. After that create Pull request to main branch. Remember: it's forbidden to push something into master! 


1. Create a little HTML file with your CV data (about yourself). Add some text, photo, links. Use css flexbox or grid (but you need read a lot about other types of creating layouts (use position and display attributes)). Practice in design, don't use really simple layout. Add css and script files via link in html header (css with some styles and script with for example alert('Hello, it's my CV') when window loaded (window.onload)).

2. Nice now you can add some details to your site with CV. Let's make site for business). Add sidebar and Header. Create adaptive design (not only flexible) by using @media in css. And add few other pages (main, about me, services, contacts..). Use semantic HTML5 instead of pour div containers.

3. It's time to refactoring! Think a little what you want to improve in your code (i don't mean UI) add CSS variable, use pseudo classes and e.t.c. Do you have some buttons (i hope you have). Add javaScript code to handle mouse click (for example hide/show some blocks).

4. Ok. It's time to use preprocessor. Choose between SASS and less. (I prefer SASS). Use BEM methodology to group your code. Rewrite your styles with preprocessor and connect generated file to your HTML files. Write a little instruction to other developers how to work with your code.


## Lesson 2

Time to complete: 200 hours

Create new branch "lesson-2". Use it for work. Create Pull request to main branch after completing.

1. Good job (for 2005). But now we need to make our site more dynamic. Lets start! remove all Html code and use only JS for generated HTML files (createElement, innerHtml). Try to work with DOM Elements attributes.

2. Great. But let remove all our html files (all of them have empty body i think) and add js files instead. (u need to think how to do it).

3. Now we have only one html file and few js files. But it's hard for servers to send a lot of files. Do you hear about webpack? It helps us! By the way, add preprocessor and code minification to your webpack. Of course it's really hard to work without live server. Add it to your project too. Live server should fast rebuild your project after any changes.

4. Really good. But we don't have any tools for control our code style and check errors (static code analyzing). Add eslint to your project. Use special plugin in your IDE to see eslint hints. Of course you need to configure your eslint (get airbnb configuration for example).

5. Almost done! The last thing. Do you hear about TypeScript? Add it to your project. It helps to avoid a lot of mistakes in your code.


# Lesson 3

Time to complete: 200 hours
Branch "lesson-3". PR after completing.

1. Lets structure your code. Let's use special classes and models. Separate different functionalities. Read about main OOP principles, SOLID principles. 

2. Great work! You are pretty advanced for 2010! Try to add a page with simple toDo list. Add possibility to add, remove, update. Use browser local storage to save data between sessions.

3. It's time to work with js more. Do you hear about API? Sometimes it could be helpful. Add page which shows the wether. Add button ("get wether in minsk" for example) to send request. Use fetch and async functionalities to get data from remote servers (find someone free). Show actual data for your region. It's really hard task for first time but it is very important.

3. Give me more controls to configure request. Use special class to group your code right. Change styles depending on the response data (for example change background).

4. Refactoring your code. Add more interfaces, avoid "any".

# Lesson 4

Time to complete: 100 hours
Branch "lesson-4". PR after completing.

1. It's time to use FRAMEWORK!!! Read docs about React.js. Add it to your app manually. Rewrite your previous code using react.js. (Reconfiguring typescript and eslint required). Use Stub firstly instead of async request. It's really hard first time, but later it will be really easy.

2. Ok, when you have got some experience in react and know about components and component's lifecycle it's time to use hooks. Use as much any hooks as you can!! Read about all of basic hooks many times. Improve your code.

3. Super! Almost production) Not bad for 2018! Add some state manager to your app (redux or mobX). Improve your code even more! Connect your state manager to async classes.

4. Great! Compile your code and deploy it on Heroku or Netlify. Read about CI/CD. Improve CI/CD process. Adjust your git repo.

It's time to choose your way. If you want to get in enterprise -- i can help u. If you want to be freelancer -- you need to read about it more. It's good to play a little with node.js, docker, databases, clouds, ci/cd, but it's not necessary. You can find a job like junior frontend react developer now. Read classical McConnel bool "Perfect code".
