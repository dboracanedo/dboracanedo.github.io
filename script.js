$(document).ready(function(){

    //Progress Bar Circle A

    let containerA = document.getElementById("circleA");
    let circleA = new ProgressBar.Circle(containerA, {
        color: 'blue',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#0000ff'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 50);
        circle.setText(value);
    }
    });

    // Circle B

    let containerB = document.getElementById("circleB");
    let circleB = new ProgressBar.Circle(containerB, {
        color: 'Blue',
        strokeWidth: 8,
        duration: 1600,
        from: { color: '#AAA' },
        to: { color: '#0000ff'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 20);
        circle.setText(value);
    }
    });

    // Circle C

    let containerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(containerC, {
        color: 'Blue',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#AAA' },
        to: { color: '#0000ff'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 10);
        circle.setText(value);
    }
    });

    // Circle D

    let containerD = document.getElementById("circleD");
    let circleD = new ProgressBar.Circle(containerD, {
        color: 'Blue',
        strokeWidth: 8,
        duration: 2000,
        from: { color: '#AAA' },
        to: { color: '#0000ff'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 100);
        circle.setText(value);
    }
    });

    // Inicia quando chega no Progress Bar 
    
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e){
        let scroll = $(window).scrollTop();
        if(scroll > (dataAreaOffset.top - 500) && stop == 0){
            
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

        stop = 1;
 
        }
    });

    //Parallax

    setTimeout(function(){
        $('#data-area').parallax({imageSrc: 'img/empresa.6.jpg'});

    }, 250);
});