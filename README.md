# (Freeingreturns.com) main page

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/93a6e0b5-c6f1-4151-8b7c-bd1967719f11/deploy-status)](https://app.netlify.com/sites/freeing-returns-landingpage/deploys)

Home Page view in Desktop
![Hone Page-Desktop](/readme/homepage-desktop.PNG "Home page view - desktop version")

Home Page view in Mobile

![Hone Page-Desktop](/readme/homepage-mobile.PNG "Home page view - desktop version")


# Table of content
1. [Overview](#overview)
2. [Section of website](#section)


## Overview
---

 This repository is for the main page for freeingreturns.com. The technology that are used to create the home page are **HTML**, **CSS** (animation and transition are also store in CSS), **SCSS**, **Boostrap v4.3.1**, **Google Analytics** (for tracking visiting users to the website), **Sendinblue** (for the subsciption pop up), **Hubspot** (chat window on the bottom right of the screen), **Netlify form** (for the contact form at the bottom). The website is being hosted on **Namecheap** and deploy on **Netlify**.
 
## Section
---

Navigation button on the top of the homepage
* **Home**
    
    The home section contain the images of different devices using Freeing Returns dashboard. The 'learn more' button will have a modal popup that contain the overall video of Freeing Returns. There is also a button at the bottom of that modal that will take the user to the contact form at the bottom of the main page.

* **Retailer Overview**
    
    This section uses the animation features the CSS folder. Icon images are located in the /img folder. The background image is also store in the /img folder.

* **Consumer overview**
    
    This section is the same as the Retailer overview above, except this section doesn't have a background image.
    
* **Why choose us?**
    
    This section uses the carousel function that are created within the /css/main.css folder. The background color of this carousel can be change within that CSS file.

* **About**
    
    This section uses the animation CSS file within the /css folder. There are also a 'Featured In' section where all of the images are store in the /img folder

* **Team**
    
    This section uses Bootstrap to create the different user cards. The animation are use within the /css folder.

* **News**
    
    The code for this section are below for all 3 widgets that are used to display the Twitter, Facebook, and Instagram social account for Freeing Returns.

Twitter
```HTML
  <a class="twitter-timeline" data-width="500"
        data-height="450" href="https://twitter.com/freeingreturns?ref_src=twsrc%5Etfw">Tweets by freeingreturns</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```       
Facebook
```HTML
<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffreeingreturnsinc%2F%3Fref%3Dpage_internal&tabs=timeline&width=400&height=410&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="400" height="450" style="border:none;overflow:hidden; margin-top: 125px; margin-left:-25px" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
```
Instagram
```HTML
  <script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-d0b7068c-228f-43b9-9ce9-e35bcc99f7e4"></div>
```

* **Schedule a Demo**
    
    This section uses Netlify form to create the submitting form for user input and storing of data.

![Netlify form](/readme/netlify-form.PNG "Netlify form")

* **Footer**
    
    Uses /css/main.css file to format the footer section.

* **Chat**
   
   The code that create the chat option at the bottom right of the screen.

```HTML
  <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7898227.js"></script>
```
* **Covid-19 offering page**
    The HTML, CSS and JS files are located in the /covid19 folder of this repository. All of codes for that page are all in one folder (/covid19) and doesn't use any other files from the root folders.

* **Google Analytics**
    There isn't a section for Google Analytics that are available in the view, but this code is running in the background that track user visiting and leaving the site.

```HTML
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-138454554-2"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-138454554-2');
    </script>
```
