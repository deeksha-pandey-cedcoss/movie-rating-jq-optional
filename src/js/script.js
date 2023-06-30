// jquery ready section
$(document).ready(function () {
    $movie = [{
        title: "bahubali",
        rating: 9,
    }];
    display();
    $("#movie").on('click', function () {

        $title = $("#title").val();
        $rating = $("#rating").val();

        if ($title == "" || $rating == "") {
            $("#main").text("EMPTY INPUT").css("background-color", "RED");
        } else if ($rating <= 0) {
            $("#main").text("Unacceptable Rating").css("background-color", "RED");
        } else {

            $arr = { title: $title, rating: $rating };
            $movie.push($arr);
            $i = 0;
            {
                $str = "";
                $movie.forEach(element => {
                    $str += `<tr><td>${element.title}</td><td>${element.rating}</td><td><button id=${$i} onclick='remove(this.id)'>X</button></tr>`;
                    $i++;
                });

                $("#movietable").html($str);

            }
        }
    });
    $("#reset").on('click', function () {

        $title = "";
        $("#title").val($title);
        $("#rating").val("");
    });

});
function display() {
    $str = "";
    $i = 0;
    $movie.forEach(element => {
        $str += `<tr><td>${element.title}</td><td>${element.rating}</td><td><button id=${$i} onclick='remove(this.id)'>X</button></tr>`;
        $i++;
    });

    $("#movietable").html($str);
}
function ratingorder() {
    $movie.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });

    console.log($movie);

    display();
}
function ratingor() {
    $movie.sort(function (a, b) {
        console.log(a.rating);
        console.log(b.rating);
        if (a.rating < b.rating) {
            return -1;
        }
        if (a.rating > b.rating) {
            return 1;
        }
        return 0;
    });

    display();
}
function remove(id) {
    $movie.splice(id, 1);
    display();
}