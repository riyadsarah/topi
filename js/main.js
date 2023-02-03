
console.log('Hello World');

window.addEventListener("load", function(){
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preloader-finish");
  });




  
  

      function tampilkanJam() {
        var waktu = new Date();
        var jam = waktu.getHours();
        var menit = waktu.getMinutes();
        var detik = waktu.getSeconds();

        var tanggal = waktu.getDate();
        var bulan = waktu.getMonth();
        var tahun = waktu.getFullYear();

        // Tambahkan 0 didepan angka jika kurang dari 10
        if (jam < 10) {
            jam = "0" + jam;
        }
        if (menit < 10) {
            menit = "0" + menit;
        }
        if (detik < 10) {
            detik = "0" + detik;
        }

        document.getElementById("jam").innerHTML = jam + ":" + menit + ":" + detik;
        document.getElementById("tanggal").innerHTML = tanggal + "-" + (bulan + 1) + "-" + tahun;

        setTimeout("tampilkanJam()", 1000);
    }
    tampilkanJam();



    









// kalkilator

      input1.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
        submitButton.click();
        }
        });
        
        input2.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
        submitButton.click();
        }
        });




        //
            var headerNav = document.getElementById("header-nav");

        window.onscroll = function() {
          if (window.pageYOffset > 100) {
            headerNav.style.backgroundColor = "transparent";
          } else {
            headerNav.style.backgroundColor = "rgba(0,0,0, 0.5)";
          }
        };
    
        




        function updateTime() {
          var date = new Date();
          var time = date.toLocaleTimeString();
          var formattedDate = date.toLocaleDateString();
          document.getElementById("time").innerHTML = time;
          document.getElementById("date").innerHTML = formattedDate;
        }
        
        function getWeather() {
          // Code to fetch weather data from API goes here
          var location = "Salamanggu, Maja";
          var temperature = "17°C";
          var condition = "Mountdunk Cloudy";
          document.getElementById("location").innerHTML = location;
          document.getElementById("temperature").innerHTML = temperature;
          document.getElementById("condition").innerHTML = condition;
        }
        
        updateTime();
        setInterval(updateTime, 1000);
        getWeather();
        





        

        // Select the button

     // Set the date we're counting down to
var countDownDate = new Date("march 22, 2023 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the result in the element with id="timer"
  document.getElementById("days").innerHTML = days + "hari";
  document.getElementById("hours").innerHTML = hours + "jam ";
  document.getElementById("minutes").innerHTML = minutes + "menit ";
  document.getElementById("seconds").innerHTML = seconds + "detik ";
    
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);



function openPopup() {
  document.getElementById("myPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}



function openModal(id) {
  var modal = document.
getElementById(id);
modal.style.display = "flex";
}

function closeModal(id) {
var modal = document.getElementById(id);
modal.style.display = "none";
}






//calculator

          //kalkulator umur
          function hitungUmur() {
            var tanggalLahir = parseInt(document.getElementById("tanggal-lahir").value);
            var bulanLahir = parseInt(document.getElementById("bulan-lahir").value);
            var tahunLahir = parseInt(document.getElementById("tahun-lahir").value);
            var sekarang = new Date();
            var tanggalSekarang = sekarang.getDate();
            var bulanSekarang = sekarang.getMonth() + 1;
            var tahunSekarang = sekarang.getFullYear();
            var umurTahun = tahunSekarang - tahunLahir;
            var umurBulan = bulanSekarang - bulanLahir;
            var umurTanggal = tanggalSekarang - tanggalLahir;
            if (umurBulan < 0) {
              umurTahun--;
              umurBulan = 12 + umurBulan;
            }
            if (umurTanggal < 0) {
              umurBulan--;
              umurTanggal = 30 + umurTanggal;
            }
            document.getElementById("output").innerHTML = "Umur Anda adalah " + umurTahun + " tahun " + umurBulan + " bulan " + umurTanggal + " hari.";
          }
      
          function resetRiwayat() {
            document.getElementById("tanggal-lahir").value = "";
            document.getElementById("bulan-lahir").value = "";
            document.getElementById("tahun-lahir").value = "";
            document.getElementById("output").innerHTML = "";
          }
          document.addEventListener("keyup", function(event) {
        if (event.code === "Enter") {
          hitungUmur();
        }
      });





      // This example uses jQuery
$(document).ready(function() {
  $('.product-card').click(function() {
    $(this).toggleClass('flipped');
  });
});



