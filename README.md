# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Wireframes / Priority Matrix / MVPs / Timeline | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) / NavBar & Footer / Mobile Grid layout | Complete
|Day 3| MVP / Responsive styling / jQuery | Complete
|Day 4| MVP / Bug Fixes / Final Touches| Complete
|Day 5| Present | Incomplete


## Project Description

The final project will be a functioning portfolio website. It will follow minimalistic design principles and be responsive. I prefer minimal and clean design for portfolios so the focus can be on the individual and their skills.   

## Wireframes 

- [Mobile](https://imgur.com/a/HoUxuOv)
- [Desktop](https://imgur.com/a/gb98otz)

## Time/Priority Matrix 

[Link](https://imgur.com/a/r00tEaY)

### MVP/PostMVP - 5min

#### MVP 

- Functional sticky navigation bar
- Functional footer 
- HTML & CSS Grid styling on HOME page
- HTML & CSS Grid styling on PROJECTS page   
- HTML & CSS Grid styling on CONTACT page
- Responsive styling

#### PostMVP 

- Google Form on contact page
- Hover animations
- fadeIn/slideIn animations
- General styling (font families, colors, etc.)
- Social media icons in footer

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Core HTML for home, projects, and contact page | H | 2hrs | 3hr |
| Grid/Flexbox styling for nav bar | H | 2hrs | 5hr |
| Functioning navbar (e.g. clicking on projects takes you to projects) | H | 1hr | 0.5hr |
| Functioning footer | H | 1hr |  2hr |
| Grid styling (mobile) home page | H | 2hrs | 3hr |  
| Grid styling (mobile) projects page | H | 2hrs |  3hr | 
| Grid styling (mobile) contact page | M | 2hrs | 0.5hr|
| Responsive styling (tablet) | H | 2hr |  2hr | 
| Responsive styling (desktop) | H | 2hr |  2hr |
| Total | H | 16hrs| 21hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Google Form displaying on contact page | L | 1hr | 0.5hr | hr |
| Google Form successfully submits to a Sheet | L | 1hr | 0.5hr |
| Hover animations over navbar | M | 1hr | 0.5hr |
| Animations on load | H | 2hr | 0.5hr | 0.5hr |
| General styling (font families, colors, etc.) | H | 1hr | 2hr |
| Social media icons in footergi | L | 1hr | 1hr |
| Total | H | 7hrs| 5hrs |s

## Additional Libraries

fontAwesome
Google Fonts

## Additional Sources
- [Google article to attach form to site](https://support.google.com/a/users/answer/9308623?hl=en) 
- [Stackoverflow article to help with sticky footer](https://support.google.com/a/users/answer/9308623?hl=en)
- [MDN location assign](https://developer.mozilla.org/en-US/docs/Web/API/Location/assign)

## Code Snippet

The below redirects a user to the homepage when they click on the logo in the navbar. I decided halfway through the project I wanted to move my image from the page to the nav bar, so I ended up having to change a decent amount of code. When Googling, the most popular solution was to wrap the img tag in an a tag where the a tag has an hfref toward index.html. This works but it caused problems for me since other items in the nav were already a tags and styled using grid. I thought there might be a solution with javascript, so I looked through MDN documentation and found location: assign. Then I was able to make a function where users are redirected to the homepage on a click. It was cool to be able to clearly see different solutions to the same problem. 

```
$(".anthony-headshot").on("click", function() {
            window.location.assign("index.html");
        });
```

## Issues and Resolutions
Major issue was getting the logo to display properly in the navbar. It was a lot of trial and error with CSS grid and styling. 

Having the footer stick to the bottom. Originally this worked when users didn't have to scroll, but I eventually added a page that needed users to scroll. When this happened the footer was stuck in the middle of the page. I found an example from bootstrap that included HTML and body tags to include in the CSS. This made sure my footer stayed at the bottom of the page even if users had to scroll.

I wanted users to be able to click on my logo and have it redirect them to the homepage. One solution was nesting the img inside an a tag, but this caused a decent amount of problems that would've taken a while to troubleshoot. I looked through the Jquery documentation and was able to .on(click) and window.location.assign to redirect users to the home page when they clicked on the logo. 

Responsive design for the nav bar was a constant struggle. I felt like I had it styled perfectly, and then I would adjust some code, and the nav bar wouldn't look right anymore. It was just a lot of back and forth with margins and text-size etc. 



#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
