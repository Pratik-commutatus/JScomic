var string = localStorage.getItem("uniqueString");
var storage = JSON.parse(string);
if (storage == null) {
    var obj = [];
    var storage = [];
}
else {
    var stringobj = localStorage.getItem("obj");
    var obj = JSON.parse(stringobj);
};
function generate() {
    document.getElementById("loader").style.display = "block";
    var promiseArray = [];
    for (k = 0; k < 4; k++) {
        var now = new Date();


        while (true) {
            var randomNum = Math.floor((Math.random() * 1000) + 1);



            if (storage.length >= 1000) {

                break;
            }

            if ((storage.indexOf(randomNum) === -1)) {

                var today = now.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });

                storage.push(randomNum);
                localStorage.setItem("uniqueString", JSON.stringify(storage));

                var string = localStorage.getItem("uniqueString");
                storage = JSON.parse(string);

                const fetchPromise = fetch(`https://xkcd.now.sh/?comic=${randomNum}`);


                promiseArray.push(fetchPromise);

                break;
            }


        }

    };

    function smthn(li) {

        var img = li.img;
        if (storage.length >= 1000) {
            document.getElementById('divImage').innerHTML = `<h1>THE END</h1>`;
        }
        else {
            document.getElementById("loader").style.display = "none";
            document.getElementById(`firstpage`).innerHTML += `<div class="first-page-image"><img src="${img}"></div>`;

        };
        var stringobj = localStorage.getItem("obj");
        var obj = JSON.parse(stringobj);


        if (obj == null) {
            obj = [];
        };
        obj.push({
            "time": now.toLocaleTimeString(),
            "date": today,
            "title": li.title,
            "image": img


        });
        localStorage.setItem("obj", JSON.stringify(obj));


    };


    var promiseAll = Promise.all(promiseArray).then(result => {
        return Promise.all(result.map(data => {
            return data.json();
        }));
    }).then(final => {
        return final.forEach(val => {
            return smthn(val);
        })
    });

};

function check() {
    var scrollHeight = document.scrollingElement.scrollHeight;
    var clientHeight = document.scrollingElement.clientHeight;
    var scrollTop = document.scrollingElement.scrollTop;
    if (scrollHeight - clientHeight === scrollTop) {
        generate();
    };
};


