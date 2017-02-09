//Function for increasing the number of likes
function increase_likes() {
    
    //Get desired element
    var num_of_likes = document.getElementsByClassName("num_of_likes");
    
    //Get the current number of likes
    var current_number = quote_list[quote_tracker].likes;
    
    //Increase likes by one
    current_number++;
    quote_list[quote_tracker].likes = current_number;
    

    //Scroll original number up through the div
    num_of_likes[0].className += " scroll_up";
    
    //Add one to the original number and immediately move to below div
    setTimeout(function() {
        num_of_likes[0].innerHTML = current_number;
        num_of_likes[0].className = "num_of_likes no_transition below";
    }, 400);
    
    //Scroll new number from below div back to original place
    setTimeout(function() {
        num_of_likes[0].className = "num_of_likes";
    }, 410);
    
}

//Function for switching quotes
function switch_quotes() {
    
    
    //Set initial direction to null
    var direction = null;
    
    //Get the class name
    var class_name = this.className;
    
    
    //Figure out if right or left arrow was clicked
    if(class_name.includes("right_arrow")) {
        direction = "next";
    }
    else if(class_name.includes("left_arrow")) {
        direction = "previous";
    }
    
    
    //Update quote tracker to new position
    if(direction == "next" && quote_tracker == (quote_list.length - 1)) {
        quote_tracker = 0;
    }
    else if(direction == "previous" && quote_tracker == 0) {
        quote_tracker = quote_list.length - 1;
    }
    else if(direction == "next") {
        quote_tracker++;
    }
    else if(direction == "previous") {
        quote_tracker--;
    }
    
    
    //Make current quote info disappear
    document.getElementsByClassName("content")[0].className = "content disappear";
    document.getElementsByClassName("author")[0].className = "author disappear";
    document.getElementsByClassName("num_of_likes")[0].className = "num_of_likes disappear";
    document.getElementsByClassName("pic")[0].className = "pic disappear";
    
    //Switch to next or previous quote while invisible
    setTimeout(function() {
        
        document.getElementsByClassName("content")[0].innerHTML = quote_list[quote_tracker].quote;
        document.getElementsByClassName("author")[0].innerHTML = quote_list[quote_tracker].author;
        document.getElementsByClassName("num_of_likes")[0].innerHTML = quote_list[quote_tracker].likes;
        document.getElementsByClassName("pic")[0].src = "public/assets/" + quote_list[quote_tracker].image;
            
    }, 600);
    
    //Make the new quote re-appear
    setTimeout(function() {

        document.getElementsByClassName("content")[0].className = "content";
        document.getElementsByClassName("author")[0].className = "author";   
        document.getElementsByClassName("num_of_likes")[0].className = "num_of_likes";
        document.getElementsByClassName("pic")[0].className = "pic";  
        
    }, 610);

}


//Create a list of quotes to loop through
var quote_tracker = 0;
var quote_list = [
    {
        quote: "Don't you think that if I were wrong, I'd know it?",
        author: "-Sheldon Cooper",
        likes: 423,
        image: "shel.png"
    },
    {
        author: "-Elon Musk",
        quote: "I would like to die on Mars. Just not on impact.",
        likes: 321,
        image: "musk2.png"
    },
    {
        author: "-Mark Zuckerberg",
        quote: "The biggest risk is not taking any risk.",
        likes: 637,
        image: "zuck.png"
    },
    {
        author: "-Dr. House",
        quote: "We all make mistakes, and we all pay a price.",
        likes: 212,
        image: "house.png"
    },
    {
        author: "-Steve Jobs",
        quote: "I want to put a ding in the universe.",
        likes: 572,
        image: "jobs.png"
    },
    {
        author: "-Barney Stinson",
        quote: "Ted, I'm gonna teach you how to live.",
        likes: 189,
        image: "barney.png"
    },
    {
        author: "-Michael Scott",
        quote: "If the salad is on top, I send it back.",
        likes: 121,
        image: "michael.png"
    },
    {
        author: "-Richard Hendricks",
        quote: "Jobs was a poser. He didn't even write code.",
        likes: 304,
        image: "richard.png"
    },
    {
        author: "-Dylan Thomas",
        quote: "Do not go gentle into that good night.",
        likes: 822,
        image: "dylan.png"
    },
    {
        author: "-Yogi Berra",
        quote: "When you come to a fork in the road, take it.",
        likes: 298,
        image: "yogi.png"
    },
    
]




//Add listener for the click of the "like" section
var links = document.getElementsByClassName("likes")[0];
links.addEventListener("click", increase_likes);


//Add listeners for clicking left or right arrows
var right_arrow = document.getElementsByClassName("right_arrow")[0];
right_arrow.addEventListener("click", switch_quotes);

var left_arrow = document.getElementsByClassName("left_arrow")[0];
left_arrow.addEventListener("click", switch_quotes);













