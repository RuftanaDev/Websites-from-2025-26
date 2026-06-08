 $("body").addClass("js-enabled");
        // Bra:  $slider.animate(...)
        var $slider      = $("#slider");
        var $slides      = $(".slide");
        var $btnNext     = $("#next");
        var $btnBack     = $("#Back");
        var $btnStop     = $("#Stop");
        var $dotsWrapper = $("#dots");
        var $window      = $("#window");
        var $buttons     = $("#buttonstoclick");

        // KONSTANTER & STATE
        var sliderWidth = 640;                 // bredd på ett slide-fönster (px)
        var slideCount  = $slides.length;      // totalt antal slides
        var index       = 0;                   // aktiv slide (0-baserat)
        var paused      = false;               // är autoplay pausad?

        // SKAPA PRICK-INDIKATOR
        // Loopar igenom alla slides och skapar en klickbar prick per slide
        for (var i = 0; i < slideCount; i++) {
            // Skapar ett <span class="dot"> och lyssnar på klick
            // Variabeln i fångas med ett IIFE så rätt index används i callback
            (function(dotIndex) {
                var $dot = $("<span>").addClass("dot");
                $dot.on("click", function() {
                    goToSlide(dotIndex);
                });
                $dotsWrapper.append($dot);
            })(i);
        }

        // Visa prick-wrappern (den är dold utan JS)
        $dotsWrapper.css("display", "flex");
        $buttons.show();
        $buttons.css("display", "flex");
        $window.css("overflow-y", "hidden");

        // FUNKTION: updateDots
        // Uppdaterar vilken prick som är "active" (röd)
        function updateDots() {
            // Cachad intern: hämta alla dots bara en gång per anrop
            var $allDots = $dotsWrapper.find(".dot");
            $allDots.removeClass("active");
            $allDots.eq(index).addClass("active");
        }
        function updateButtons(){
            var $allButtons = $buttons.find("#buttonstoclick");
            $allButtons.removeClass("active");
            $allButtonseq(index).addClass("active");
        }

        // FUNKTION: goToSlide(i)
        // Animerar slidern till rätt position med absolut offset
        function goToSlide(i) {
            index = i;
            $slider.animate(
                { left: -(index * sliderWidth) }, // absolut position, inte relativ
                640
            );
            updateDots();
        }

        // Sätt starttillståndet (prick 0 aktiv)
        updateDots();

        // NÄSTA KNAPP
        // Modulo (%) gör att slidern wrappas runt till slide 0 efter sista
        $btnNext.on("click", function() {
            goToSlide((index + 1) % slideCount);
        });

        // TILLBAKA KNAPP
        // + slideCount förhindrar negativa tal i modulo
        $btnBack.on("click", function() {
            goToSlide((index - 1 + slideCount) % slideCount);
        });

        // AUTOPLAY
        // setInterval anropar funktionen var 2000ms (2 sek)
        // Källa: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
        var interval = setInterval(function() {
            if (!paused) {
                goToSlide((index + 1) % slideCount);
            }
        }, 2000);

        // PAUSE / RESUME KNAPP
        // Togglar paused-flaggan och uppdaterar knapptext
        $btnStop.on("click", function() {
            paused = !paused;
            // Byt text på knappen beroende på tillstånd
            $btnStop.text(paused ? "Resume" : "Pause");
        });

        // HOVER-PAUS
        // Pausar autoplay när musen är över sliderwindow eller knappar
        // OBS: $(window) = jQuery window-objektet, INTE $("window") (sträng)
        $window.add($buttons).hover(
            function() { paused = true; },   // mouseenter → pausa
            function() { paused = false; }   // mouseleave → återuppta
        );