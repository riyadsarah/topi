
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


//kalkulator umur



      window.onscroll = function() {
        if (window.pageYOffset > 100) {
          document.getElementById("scroll-icon").style.display = "block";
        } else {
          document.getElementById("scroll-icon").style.display = "none";
        }
      };
      
      document.getElementById("scroll-icon").addEventListener("click", function() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });

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

        
      

        


