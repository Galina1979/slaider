let slider = { //создаем массив объектов ( массив из картинок + функции с ключами)
    slides: ['banner_1.jpg', 'banner_2.jpg', 'banner_3.jpg', 'banner_4.jpg'], //массив изображений
    frame: 0, //индекс начального изображения
    set: function (image) {
    document.getElementById("scr").style.backgroundImage = "url(" + image + ")"; //установка нужного фона для слайдера
    },
    init: function () {//запуск слайдера с начальной картинки
    this.set(this.slides[this.frame]); //set - срабатывает при присвоении
    },
    left: function () {
    this.frame--;//двиежение влево
    if (this.frame < 0) this.frame = this.slides.length - 1;
    this.set(this.slides[this.frame]);
    },
    right: function () {
    this.frame++;//двиежение вправо
    if (this.frame == this.slides.length) this.frame = 0;
    this.set(this.slides[this.frame]);
    }
    };

    window.onload = function(){ // запуск слайдера после загрузки
        slider.init();
        setInterval(function(){
            slider.right();
        }, 5000);
    };