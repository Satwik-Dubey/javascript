    <!-- // Promises , async , await- -->

 
  <button id="clickbutton">Click</button>

    <script>

      let resultFromServer=fetch("https://xyz.com/post");
      //  
      console.log(resultFromServer); // from this we get a promise , matlab iska yeh hi m tume promise karta hu jab ye tsk ho jayega to m tume bata dunga

      //  yha pe fetch fn bol rha h ki  m on the spot to nhi de paunga data to tum ye promise lelo
      // to basically isne kia kia ki isne hame promise return kar diya
      // promise ke andar kya hooga ya fir ye promise resolve ho jayega ya fir reject ho jayega
      //  to basically isne execution stop nhi kiya isne bas ye mujhe promise de diya aur jab bhi ye  hoga jayega to m promise return kar dunga
      // asynchronous promise return alrte h

       // async await

      // kyunki hamlog ne yha pe async lagaya hua h usne us function ke khatam hone kaeait nhi kiya aur vo aage chala gaya aur usne uske aage koi function ko run karva diya tab tak


        async function getData(){
          let resultFromServer=await fetch("fdsfls");
          console.log(await resultFromServer.json());
           
        }
        getData();
        console.log(2+2);

        // o/p
        // pehle 4 print hoga fir baadd m getData()

        // there is another method if i dont want to use async fn

        fetch("sdaflsf")
        .then((data)=>{console.log(data)}
        .catch((error)=>{error});
      
       // usually it is not preffered
       



    </script>
