
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
            headerNav.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
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


        