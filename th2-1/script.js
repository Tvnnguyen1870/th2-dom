//định vị phần tử có id = 'btn'
var btn = document.querySelector('#btn');

//Chặn sự kiện mở context menu khi chuột phải được nhấn
btn.addEventListener('context menu', (event) => {
    event.preventDefault();
})

//Lắng nghe sự kiện và hiển thị ra nội dung nút được nhấn
btn.addEventListener('mouseup', (event) => {
    var msg = document.querySelector('#message');
    switch(event.button){
        case 0: msg.textContent = 'left mouse button clicked'
        break;
        case 1: msg.textContent = 'middle mouse button clicked'
        case 2: msg.textContent = 'right mouse button clicked'
        break;
        default: msg.textContent = `Unknown mouse button code: ${event.button}`;
    }
})