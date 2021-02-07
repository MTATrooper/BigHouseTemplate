 $(function() {
     $('.menu>li').mouseover(function() {
         if (this.getElementsByClassName('menuchild').length > 0) {
             this.getElementsByClassName('menuchild')[0].style.visibility = 'visible';
             this.getElementsByClassName('menuchild')[0].style.opacity = 1;
         }
         if (this.getElementsByClassName('danhmuc').length > 0) {
             this.getElementsByClassName('danhmuc')[0].style.visibility = 'visible';
             this.getElementsByClassName('danhmuc')[0].style.opacity = 1;
         }

     });
     $('.menu>li').mouseout(function() {
         if (this.getElementsByClassName('menuchild').length > 0) {
             this.getElementsByClassName('menuchild')[0].style.visibility = 'hidden';
             this.getElementsByClassName('menuchild')[0].style.opacity = 0;
         }
         if (this.getElementsByClassName('danhmuc').length > 0) {
             this.getElementsByClassName('danhmuc')[0].style.visibility = 'hidden';
             this.getElementsByClassName('danhmuc')[0].style.opacity = 0;
         }
     });
     $('#myCarousel').carousel({
         interval: 10000
     });

 })