let pageHeight = window.innerHeight;
        var onTop = document.getElementById("onTop");

        window.onscroll = function () {
            scroll()
        };

        function scroll() {
            if (document.body.scrollTop > pageHeight / 2 || document.documentElement.scrollTop > pageHeight / 2) {
                onTop.style.display = "block";

            } else {
                onTop.style.display = "none";
            }
        }


        $(document).ready(function () {
            $(".form-input").click(function () {
              $(".form-label").hide();
            })
          });

          function validation(){
            var x = document.forms["contact-form"]["phone"].value;
            if(isNaN(x)){
                alert("Broj nije u validnom formatu");
            }
          }
          

          $("#example, #slajder").vegas({
            slides: [{
                src: "img/slider1.jpg"
              },
              {
                src: "img/slider2.jpg"
              },
              {
                src: "img/slider3.jpg"
              },
              {
                src: "img/slider4.jpg"
              },
              {
                src: "img/slider5.jpg"
              },
              {
                src: "img/slider6.jpg"
              }
            ]
          });