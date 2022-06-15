# Lightening Talks (Unit 3)

**Describe NGINX and what it is used for** Andrea: 
- Open-source web server
- software-based load balancer, HTTP cache, API gateway, & reverse proxy
  - HTTP Cache: stores info locally to speed communication between client(such as a web browser) and server
  - API gateway: ?? translate data between web protocols and web-unfriendly protocols that are used internally
  - Reverse Proxy: helps to maintains anonymity

---
**Define Bluetooth** (Marlyn)
- generally work within 10m range
- frequency hopping spread spectrum (FHSS): divdes freq range into 70 channels, hops around frequently (approx 2x/sec)
- Adaptive Frequency Hopping: avoids wifi channels, avoids 'bad channels'
- bluetooth classic/low energy(smart): most popular
- Introduced in 1998; first device was launched in 2001.
---
**Describe Django and compare it to Flask** (Natalya)
- Django: Full-stack framework
  - supports XML, HTML, JSON, etc
  - Does not have support for API?
- Flask: WSGI framework (web server g-- interface)
  - Used to forward requests from a webserver to a backend Python web application 
  - Provides support for APIs
  - requires fewer lines of code compared with Django

---
**Define smoke testing** (Katherine)
Smoke Testing: determine whether the deployed software built is stable or not.
- Usually done manually (act as a user... click the button the scree, etc)
- aka: 'build verification testing', 'confidence testing'
- If yes, **QA team** can go on with further software testing

---
**Define hexadecimal and hexadecimal colors for web** (Fena)
- Hexadecimals: 0-->9, plus A-->F: 16 options  
- vs. base 10: 0-->9
- Hexadecimal color codes:
  - RBG(red, blue, green): 0-->225

---	
**Summarize "Usage share of web browsers" over time and "browser engine monoculture** (Ying)
- 80% of ppl use GoogleChrome as their primary browser    

Potential issues:
- Developers tend to make products just for that browser
- Demand for browser to follow standards (ie-accessibility) declines, as there is noone to hold them accountable
- Privacy issues/one browser has lots of data, can be targeted, etc

---
**JavaScript: Describe for loops** (Mitra)
- for loop: 
  - for (initialization; condition; incremement) {statement}
- while loop:
  - while (condition) {statement; increminent inside the loop}
- Do.. while:
  - Do {code at least 1x, then...} while (condition) {statement; increminent inside the loop}
- Break && continue
- for ...in
  - for (variable in object) {statement}
  - example:
- for ...of 
  - for (variable of iterable) {statement}
  - example:
- forEach() method: 
  - does not return anything; you can access each item + apply a function to each item in the array


---
**JavaScript: Describe spread syntax**(Taingleap)  
Spread Operator: `...`followed by iterable
- This is used to expand, or spread, an iterable into invidiv elements
- example: 
```
let max = Math.max(..."43210")
console.log(max) #10
```

- ?? Seems to let you get at each element of a string or list, without having to do a loop.
---

**JavaScript: Describe rest parameter syntax** (Lin)
Rest Parameter Syntax: allows unknown number of arguments.
Function fun(a,b,...) # function will do something specific with a b, and then 
Fuction fun(...)
- It must always be last if other parameters are also listed
- Purpose: gather all the final elements into an array

---
**JavaScript: Define hoisting and var** (Elaine)  
Hoisting: JS interpreter appears to move declaration of functions to top of the page
- Hoisting allows functions to be used in code even before they are defined
  - why could this be useful? You can organize your code with all the function calls on top, and logic below.
- Variable hoisting and class hoisting: avoid!
  - For example, if you use `var num;` num can be hoisted
---
**Boostrap** (Nina)
- Pros: Saves time, responsive, compatable with various browers, consistent design, open source
- Cons: May look boring/similar to other sites, may require a lot of overrides
- Bootstrap 5: most current version
  - Place link tag in the `<head>` tag and `<script>` tag for JS bundle before closing 
- Bootstrap **Themes**: packages of HTML/CSS/JS that provide syling, UI components, and page layouts
- If using with react, need to add **React-Bootstrap** package

---
**Kubernetes** (Roshni)
- Open source, developed by Google
- Software that managed containers... allows 
- When run Kubernetes, you get clusters ... nodes... ?
- load balancing, self-healing, secret&config mngmt
- often used with Docker
---
**Docker** (Joanna)  
Docker deploys applications
- packages software into containers, with dependencies included
- Helps to deploy/scale applications
- Important for DevOps
---
**NoSql Databases** (Diana)
- SQL DBs uses tabular design, which doesn't alwasy scale well
- Various options: key-value, column-family, graph, document
- One NOSQL option: **Firebase** (supports Java, JS, objective C)
  - subscription based ($?)
  - small-scale apps
  - Bypasses the backend (no HTTP requests)
  - Real-time
  - Read using listeners
- Another option: **MongoDB**
  - open source (free)
  - supports C, C#, Java, ...
---
**ASCII vs Unicode** (Ada)  
Character encoding:  each character is attached to specific #s (that translate into binary code)  
**ASCII**:  American Standard Code for Information Exchange.  Only accounted for English language.  8-bit standard.  
**Unicode**:   aka Universal Coded Character Set.  It can be up to 32-bits.  Contains characters from most written languages, emojis, etc.

---
**Functional Programming (vs. imperative Programming)** (Tori)

**Functional Programming**:   
  - **F#, clojure, erland, haskell**: func programming languages
- variables and functions are the core blocks rather than objects/methods
- Pure functions: create no side effects, always give same output with save input
- Avoid loops/ if...else statements; use recursion instead
- First-class functions: functions can be used as a variable
- Higher order functions:
- functional composition  
**vs**  
**imperative programming**:
- Step by step
- State changes are important
- primary flow control: loops, conditionals, etc\
---
**Microservices Architecture** (Liquing)  
- **Monolithic applications** group all components (UI, DB, Business logic) together
  - Everyone is using the same technologies
- **Microservices**: divides components of code base into sets of similar processes
  - Allows different services to use diff technologies and scale
  - Cons: several diff technologies to integrate/requires stronger deployment skills.
---








