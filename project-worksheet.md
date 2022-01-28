# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Wireframes / Priority Matrix / MVPs / Timeline | Incomplete
|Day 2| Core Application Structure (HTML, CSS, etc.) / NavBar & Footer / Mobile Grid layout | Incomplete
|Day 3| MVP / Responsive styling / jQuery | Incomplete
|Day 4| MVP / Bug Fixes / Final Touches| Incomplete
|Day 5| Present | Incomplete


## Project Description

The final project will be a functioning portfolio website. It will follow minimalistic design principles and be responsive. I prefer minimal and clean design for portfolios so the focus can be on the individual and their skills.   

## Wireframes

?? About page is a requirement, but is it ok that I have this information set in my home page? Or do I need to have a separate about page ??  

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
| Core HTML for home, projects, and contact page | H | 2hrs | hr |
| Grid/Flexbox styling for nav bar | H | 2hrs | hr |
| Functioning navbar (e.g. clicking on projects takes you to projects) | H | 1hr | hr |
| Functioning footer | H | 1hr |  hr |
| Grid styling (mobile) home page | H | 2hrs | hr |  
| Grid styling (mobile) projects page | H | 2hrs |  hr | 
| Grid styling (mobile) contact page | M | 2hrs | hr|
| Responsive styling (tablet) | H | 2hr |  hr | 
| Responsive styling (desktop) | H | 2hr |  hr |
| Total | H | 16hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Google Form displaying on contact page | L | 1hr | -hr | hr |
| Google Form successfully submits to a Sheet | L | 1hr | hr |
| Hover animations over navbar | M | 1hr | hr |
| Animations on load | H | 2hr | -hr | hr |
| General styling (font families, colors, etc.) | H | 1hr | hr |
| Social media icons in footergi | L | 1hr | hr |
| Total | H | 7hrs| hrs |s

## Additional Libraries

fontAwesome
 Use this section to list all supporting libraries and thier role in the project. 

## Additional Sources
Google form article I used here 
MDN documents for some jquery 
Bootstrap footer
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
Major issue was getting the logo to display properly in the navbar. It was a lot of trial and error with CSS grid and styling. 

Having the footer stick to the bottom. Originally this worked when users didn't have to scroll, but I eventually added a page that needed users to scroll. When this happened the footer was stuck in the middle of the page. I found an example from bootstrap that included HTML and body tags to include in the CSS. This made sure my footer stayed at the bottom of the page even if users had to scroll.

I wanted users to be able to click on my logo and have it redirect them to the homepage. One solution was nesting the img inside an a tag, but this caused a decent amount of problems that would've taken a while to troubleshoot. I looked through the Jquery documentation and was able to .on(click) and window.location.assign to redirect users to the home page when they clicked on the logo. 

Responsive design for the nav bar was a constant struggle. I felt like I had it styled perfectly, and then I would adjust some code, and the nav bar wouldn't look right anymore. It was just a lot of back and forth with margins and text-size etc. 



#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object