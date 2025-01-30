<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="app"></div>
    <nav class="block">
      <p class="paragraph">Welcome to my website</p>

    </nav>
    <div class="block">
      <h4>Hey There , My name is<span id="username">Satwik Dubey</span>
        <p class="paragraph">Here is a code for you</p>
        <pre><code>console.log("Hey There")</code></pre>
    </div> 
    <div>
      <h3> Hi</h3>
    </div>


    <!-- // Event Listeners- -->

 
  <button id="clickbutton">Click</button>

    <script>

    const el = document.getElementById("clickbutton");

    el.addEventListener("click", () => {
      console.log("I am clicked");
    });

//     addEventListener("click", () => { ... }): This method attaches an event listener to the element (el). When the element with ID "clickbutton" is clicked, the function inside addEventListener will execute.
// console.log("I am clicked"): When the element is clicked, this message will be logged to the console.


      // another method of typing this function 

      function doSomething(){
        console.log("I am Ckicked");
      }

      el.addEventLIatener("click",doSomething);

      // another example

      const nameBlock=document.getElementById("name-block");

      el.addEventListener("click",()=>{
        if(nameBlock.style.color === "red"){
          nameBlock.style.color = "blue";
        }else{
          nameBlock.style.color = "red";
        }
      });

      // another example
      // yha pe hamlog jitne bhi children h jab ham une  click karenge to vo remove ho jayenge

      const allChildren= document.querSelector("body").children;

      for(let i=0;i<allChildre.length;i++){
        allChildren.items(i).addEventListener("click",()=>{
          allChildren.item(i).remove();
        });
      }
      



    </script>

---------------------------------------------------------------------
      
<div id="mycontainer"></div>
    <!-- // Create elements dynamically- -->

 
  <button id="clickbutton">Click</button>

    <script>

    const button=document.getElmentById("clickbutton");
    const container=document.getElmentById("my-container");

    button.addEventListener("click",()=>{
      const el=document.createElement("hi");
      el.innerText="Satwik Dubey";
      container.appendChild(el);
    })

    </script>


    
  </body>
</html>
