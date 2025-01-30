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

    <script src="./index.mjs" type="module">

      const body=document.querySelector("body");
      body.innerHTML="<h1>Hacked!!</h1>"; // change content of body

      // for access elements
      console.log(body.innerHTML);

      //  by id

      const username=document.querySelector("#username");
      console.log(username);
      console.log(username.innerText); // if there is only text 
      username.innerText="john Doe";
      // for injecting html code we use innerHTML and forinsrting only text we user innerText

      // by class
      const ele=document.querySelector(".paragraph");
      console.log(ele);  


      // query selector returns the first element
      



    </script>

    <!--  query selector
          selectors
          -tag name
          -id #
          -class . 
    
    
    -->

    
  </body>
</html>

------------------------------------------------------------------------------------------------------


  
