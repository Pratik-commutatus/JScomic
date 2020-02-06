
var c= localStorage.getItem("counter");
if (c!='1'){
    var storage = [];
        
}
else{
    var string = localStorage.getItem("uniqueString");
          var  storage = JSON.parse(string);
}

        function generate() {




            while (true) {
                var randomNum = Math.floor((Math.random() * 10) + 1);



                if(storage.length>=10){
                    // storage2 = storage;
                    break;
                }


                
                if ((storage.indexOf(randomNum) === -1)) {
                    storage.push(randomNum);
                    localStorage.setItem("uniqueString", JSON.stringify(storage));
                    localStorage.setItem("counter", '1');
                    break;
                }
                
                
            }

            



            var string = localStorage.getItem("uniqueString");
            storage = JSON.parse(string);





            const fetchPromise = fetch(`https://xkcd.now.sh/?comic=${randomNum}`);
            fetchPromise.then(response => {
                return response.json();
            }).then(input => {
                var img = input.img;
                document.getElementById('divimage').innerHTML = `<img src="${img}">`;
                console.log(img);
            });




        };



