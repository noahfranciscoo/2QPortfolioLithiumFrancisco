# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right. Answer: Compared to the default static positioning, the side bar moved 20 px the right and 20 px down based on its static position.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative? The footer says in place even when you scroll up and down. It is "stuck" on the webpage and can not be unseen.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed? The effect of the position: absolute on the element is that it moves the ekement based on its previous ancestor. Its different from fixed as in a fixed element, the element is fixed the page, in the sense, that it is permenantly in the positon you set it to. While in absolute positioning, the element move when the user scrolls or goes left or

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 300px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values? THe notice appears on top of the content as it has a higher z-index value, if the z-index values of the content and notice were switched, the notice would be "behind" the content element.


- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).Answer: 
    * Try to change the position of .content to relative then to fixed. What do you observed each time? I observed that when I changed it to relative the main content box shifted downwards, and when I switched it to fixed, the content went back to its original area, and became fixed to the page.
    * What do you observe on about the effect of z-index on .notice and .content boxes? I noticed that the z-index determines the order of which the elements diplay, for example, if the z-index value of .notice is lower than .content, the .notice element will appear behind the .content element.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)?  Static is the default positioning of an element,  and it follows normal document flow. Relative  positioning  is relative to element's original position. Absolute positioning is relative to element's nearest positioned ancestor (where it was originally), removes element from normal document flow. Fixed positioning is relative to viewport, removes element from normal document flow

    b. How does absolute positioning depend on its parent element? Absolute positioning depends on its parent element by being positioned relative to the nearest positioned ancestor. This means that the element's position is determined by the position property of its ancestor element.

    c. How do you differentiate sticky from fixed (you can research on sticky)? The difference between sticky and fixed is that fixed always stays on the users point of view, even if they scroll. While, sticky acts like a static element, but at a set threshold, it will act as a fixed element.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples. I would add banner at the top at the page and has fixed positioning  to show the school events important info, such as date and time of the event, etc.
