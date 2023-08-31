//Khai báo biến control và gán với phần tử div có id = 'control'
var control = document.querySelector('#control')

//Viết hàm lắng nghe sự kiện click cho phần tử control
control.addEventListener('click', function(event){
    // Định vị phần tử scrollDemo
    var div = document.querySelector('#scrollDemo')
    //lấy ra biên target
    var target = event.target
    // Xử lí sự kiện cuộn khi nút được nhấn
    switch (target.id) {
        case 'btn-scrollLeft-right':
            div.scrollLeft += 100;
        break;
        case 'btn-scrollTop-bottom':
            div.scrollTop += 100;
        break;
    }
})
