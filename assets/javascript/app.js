//I get the buttons and everyting working, except the gifs don't appear as gifs the appear as the gif's url
//I've been trying to get it figured out for a while but i cannot figure it out


$(document).ready(function() {

	var topics = ["Entourage", "Silicon Valley", "The Sopranos", "The Office", "Dexter", "Seinfeld", "It's Always Sunny in Philadelphia"];

		function renderGifButtons() {
			var tvShow = $(this).attr("search");
			var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvShow + "&api_key=RrBu5U1owwczeVpmJixcLsygAEEHQRMS&limit=10";

			$.ajax({
				url: queryURL,
				method: "GET"
			}).done(function(response) {
			 $("#tv-view").text(JSON.stringify(response));
			 var rating = response.data.rating
             renderButtons();
			});
		}

		function renderButtons() {
			$("#buttons-view").empty();

			for (var i = 0; i < topics.length; i++) {
				var a = $("<button>");
				a.addClass("tv-shows");
				a.attr("search", topics[i]);
				a.text(topics[i]);
				$("#buttons-view").append(a);
			}
		}

		$("#add-tvshow").on("click", function(response) {
			event.preventDefault();
			var tvShow = $("#tv-input").val().trim();
			topics.push(tvShow);
			console.log(tvShow);
			renderButtons();
		});

		$(document).on("click", ".tv-shows", renderGifButtons);

		renderButtons();

		 $(".tv-shows").on("click", function() {
      
      var state = $(this).attr("data-state");
      
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
});