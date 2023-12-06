const quizQuestions = [
    {
        question: "What does the Physical Layer in the TCP/IP model represent in the postal model analogy?",
        options: ["Local Post Office", "Central Post Office and its transportation networks", "Mailmen", "Content of the letter"],
        answer: "Central Post Office and its transportation networks",
        hint: "Think about the foundational infrastructure that supports communication, similar to how a postal system operates."
    },
    {
        question: "What type of attack is symbolized by 'impersonation with a fake ID in a controlled access building' in the Cyber Neighborhood analogy?",
        options: ["IP spoofing", "Phishing", "MAC spoofing", "Buffer overflow"],
        answer: "MAC spoofing",
        hint: "Consider the type of attack that involves pretending to be a legitimate part of the network infrastructure."
    },
    {
        question: "In the context of the TCP/IP model, what does a SYN flood attack target?",
        options: ["Application Layer", "Physical Layer", "Transport Layer", "Network Layer"],
        answer: "Transport Layer",
        hint: "Focus on the layer responsible for initiating and managing network connections."
    },
    {
        question: "Which of the following best describes IP spoofing?",
        options: ["Flooding a network with excessive requests", "Sending packets from a false IP address", "Unauthorized access using altered MAC addresses", "Overloading a system memory buffer"],
        answer: "Sending packets from a false IP address",
        hint:"Look for the option that involves deception at the IP level."
    },
    {
        question: "How is a buffer overflow attack represented in the 'Cyber Neighborhood' application?",
        options: ["An overcrowded movie theater", "A fully reserved but empty restaurant", "A person changing the address label on a mailbox", "An mailbag containing Mails"],
        answer: "An overcrowded movie theater",
        hint:"Think about a scenario where a system is overwhelmed beyond its intended capacity."
    },
    {
        question: "What aspect of network security does 'Physical tampering and MAC address spoofing' represent in the Cyber Neighborhood analogy?",
        options: ["Physical/Datalink Layer", "Network (IP) Layer", "Transport Layer", "Application Layer"],
        answer: "Physical/Datalink Layer",
        hint:"Consider the layer where physical hardware and direct data link access are involved."
    },
    {
        question: "Which analogy is used to explain the Transport Layer in the Cyber Neighborhood application?",
        options: ["Postal tracking system", "House foundation and walls", "Mail content", "Local post offices and mailmen"],
        answer: "Postal tracking system",
        hint:"Which analogy deals with tracking and managing the flow of data, much like the transport layer?"
    },
    {
        question: "In the Cyber Neighborhood application, what does the 'local post office and mailmen' analogy represent?",
        options: ["Application Layer", "Network (IP) Layer", "Physical/Datalink Layer", "Transport Layer"],
        answer: "Network (IP) Layer",
        hint:"Think about the role of routing and delivering data packets in the network."
    },
    {
        question: "What type of attack is illustrated as 'a character changing the address label' in the Cyber Neighborhood analogy?",
        options: ["Denial-of-Service attack", "MAC spoofing", "IP spoofing", "SYN flood attack"],
        answer: "IP spoofing",
        hint:"Focus on the type of attack that involves altering source information in network communications."
    },
    {
        question: "Which layer of the TCP/IP model is associated with phishing?",
        options: ["Transport Layer", "Network Layer", "Physical Layer", "Application Layer"],
        answer: "Application Layer",
        hint:"Which layer deals with user interaction and software applications where phishing typically occurs?"
    },
    {
        question: "Which attack on the TCP/IP model is associated with the Physical Layer?",
        options: ["Denial-of-Service attack", "MAC spoofing", "IP spoofing", "SYN flood attack"],
        answer: "MAC spoofing",
        hint:"Consider attacks that directly involve network hardware or access."
    },
    {
        question: "Which layer of the TCP/IP model is associated with buffer overflow?",
        options: ["Transport Layer", "Network Layer", "Physical Layer", "Application Layer"],
        answer: "Application Layer",
        hint:"Think about the layer where software and applications operate, which can be exploited through buffer overflow."
    },
    {
        question: "What is Buffer Overflow?",
        options: ["A method of strengthening data security", "An attack where too much data is sent to a program, causing it to overwrite its internal data", "A type of cookie used in web browsers", "A technique for encrypting data"],
        answer: "An attack where too much data is sent to a program, causing it to overwrite its internal data",
        hint:"Look for the answer that describes an excessive data scenario causing system malfunction."
    },
    {
        question: "What happens in TCP Session Hijacking?",
        options: ["The data is encrypted twice for security", "A third party takes over an open TCP connection and pretends to be the terminated device", "The TCP connection is reset to improve speed", "Data packets are lost during transmission"],
        answer: "A third party takes over an open TCP connection and pretends to be the terminated device",
        hint:"Focus on the option that involves unauthorized takeover of an ongoing network communication."
    },
    {
        question: "What is a SYN Flood Attack?",
        options: ["A technique to speed up network connections", "An attack that disrupts the three-way handshake, preventing network access", "A method for encrypting data packets", "A way of strengthening network security"],
        answer: "An attack that disrupts the three-way handshake, preventing network access",
        hint:"Consider the attack that primarily disrupts the initial stage of a network connection process."
    },
    {
        question: "What is IP Spoofing?",
        options: ["Encrypting an IP address for security", "Sending data with a false IP source address", "A method to speed up internet connections", "A technique for compressing IP packets"],
        answer: "Sending data with a false IP source address",
        hint:"Look for the answer that involves disguising the origin of network communications."
    },
    {
        question: "What is MAC Spoofing?",
        options: ["Changing the source MAC/Hardware address to pretend to be a different device", "A method to encrypt MAC addresses", "A way of compressing MAC addresses for faster transmission", "A type of router configuration"],
        answer: "Changing the source MAC/Hardware address to pretend to be a different device",
        hint:"Think about the attack that involves impersonating network hardware identities."
    },
    {
        question: "What is a Protocol in networking?",
        options: ["A hardware component in a computer", "A set of rules governing interactions between network layers", "A type of network cable", "A method for cooling network servers"],
        answer: "A set of rules governing interactions between network layers",
        hint:"Focus on the option that describes a set of rules or standards in network communication."
    },
    {
        question: "What is a Packet in networking?",
        options: ["A piece of network hardware", "A block of data passed between layers", "A method of encrypting data", "A tool for network diagnostics"],
        answer: "A block of data passed between layers",
        hint:"Consider the choice that represents the basic unit of data handled in network layers."
    }
];


const flashcards = [
    {
        term: "Buffer Overflow",
        definition: "An attack method where an attacker sends too much data to a program, and when the program copies the data into an internal buffer, it overwrites its internal data."
    },
    {
        term: "TCP Session Hijacking",
        definition: "When an open TCP connection is taken over by a third party and one side of the connection is terminated and the third party pretends to be the device whose connection was terminated."
    },
    {
        term: "TCP Three-Way Handshaking",
        definition: "A three-packet exchange that consists of a request, a response with acknowledgment, and an acknowledgment."
    },
    {
        term: "SYN Flood Attack",
        definition: "A well-known attack that violates the three-way handshake, which disables network access for the target system. You keep initiating handshakes but you don’t complete it."
    },
    {
        term: "IP Spoofing",
        definition: "Sending a data with a false IP source address. You are pretending to be someone else."
    },
    {
        term: "MAC Spoofing",
        definition: "An attack in which the source MAC/Hardware address is changed to pretend to be a different device."
    },
    {
        term: "Protocol",
        definition: "A set of rules that govern the interaction between two peer layers in the network architecture. The protocol is used to carry out the functions of the layer."
    },
    {
        term: "Packet",
        definition: "A block of data that is passed between layers."
    }
];


let isQuestionShown = true;

function toggleFlashcard() {
    const flashcard = document.getElementById("flashcard-content");

    if (isQuestionShown) {
        flashcard.textContent = "Answer: 42"; // Replace with your actual answer
        isQuestionShown = false;
    } else {
        flashcard.textContent = "What is the meaning of life?"; // Replace with your actual question
        isQuestionShown = true;
    }
}




let currentQuestionIndex = 0;

function displayQuestion() {
    const question = document.getElementById("question");
    const options = document.getElementById("options");

    question.innerText = quizQuestions[currentQuestionIndex].question;
    options.innerHTML = '';

    quizQuestions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => selectAnswer(option));
        options.appendChild(button);
    });
}

// 

function selectAnswer(selectedOption) {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var modalText = document.getElementById("modal-text");
    var hint = quizQuestions[currentQuestionIndex].hint; // Retrieve the hint for the current question

    if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
        modalText.innerText = "Correct Answer!";
        modalText.style.color = "seagreen"; // Set text color to seagreen for correct answer
        currentQuestionIndex++;
    } else {
        modalText.innerHTML = "Wrong Answer.<br> <span style='color:black'>Hint: " + hint+"</span>"; // Display the hint on a new line
        modalText.style.color = "red"; // Set text color to red for wrong answer
    }

    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
        if (currentQuestionIndex < quizQuestions.length) {
            displayQuestion();
        } else {
            // Update the modal text for quiz completion
            modalText.innerText = "Congratulations!!! You have successfully completed the Quiz !!";
            modalText.style.color = "seagreen"; // Optional: Change text color for the completion message
            modal.style.display = "block"; // Display the modal with the completion message
            currentQuestionIndex = 0;
        }
    }
}


(function ($) {
    'use strict';
    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });

    $('.question').click(function () {
        // Get the ID of the related answer
        var answerId = $(this).attr('data-answer');

        // Toggle the display of the related answer
        $('#' + answerId).toggle();
    });



    /* ########################################### hero parallax ############################################## */
    window.onload = function () {

        // Set initial question

        const container = document.getElementById("flashcard-container");
    
    flashcards.forEach(card => {
        const flashcard = document.createElement("div");
        flashcard.classList.add("flashcard");
        flashcard.innerHTML = `<p style="color:white;padding-top:24%;font-family:'Playfair Display';font-size:150%">${card.term}</p>`;
        
        let isTermShown = true;

        flashcard.onclick = function() {
            if (isTermShown) {
                flashcard.innerHTML = `<p style="color:white">${card.definition}</p>`;
                isTermShown = false;
            } else {
                flashcard.innerHTML = `<p style="color:white;padding-top:24%;font-family:'Playfair Display';font-size:150%">${card.term}</p>`;
                isTermShown = true;
            }
        };

        container.appendChild(flashcard);
    });


        var parallaxBox = document.getElementById('parallax');
        var
            /* c1left = document.getElementById('l1').offsetLeft,
                       c1top = document.getElementById('l1').offsetTop, */
            c2left = document.getElementById('l2').offsetLeft,
            c2top = document.getElementById('l2').offsetTop,
            c3left = document.getElementById('l3').offsetLeft,
            c3top = document.getElementById('l3').offsetTop,
            c4left = document.getElementById('l4').offsetLeft,
            c4top = document.getElementById('l4').offsetTop,
            c5left = document.getElementById('l5').offsetLeft,
            c5top = document.getElementById('l5').offsetTop,
            c6left = document.getElementById('l6').offsetLeft,
            c6top = document.getElementById('l6').offsetTop,
            c7left = document.getElementById('l7').offsetLeft,
            c7top = document.getElementById('l7').offsetTop,
            c8left = document.getElementById('l8').offsetLeft,
            c8top = document.getElementById('l8').offsetTop,
            c9left = document.getElementById('l9').offsetLeft,
            c9top = document.getElementById('l9').offsetTop;

        parallaxBox.onmousemove = function (event) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
                y = event.clientY - parallaxBox.offsetTop;

            /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
            mouseParallax('l2', c2left, c2top, x, y, 25);
            mouseParallax('l3', c3left, c3top, x, y, 20);
            mouseParallax('l4', c4left, c4top, x, y, 35);
            mouseParallax('l5', c5left, c5top, x, y, 30);
            mouseParallax('l6', c6left, c6top, x, y, 45);
            mouseParallax('l7', c7left, c7top, x, y, 30);
            mouseParallax('l8', c8left, c8top, x, y, 25);
            mouseParallax('l9', c9left, c9top, x, y, 40);
        };

    };

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
    /* ########################################### /hero parallax ############################################## */

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });




    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });



})(jQuery);