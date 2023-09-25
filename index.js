const main = document.getElementById('toast')
const btnShowSuccess = document.querySelector('.btn.btn--success')
const btnShowError = document.querySelector('.btn.btn--error')
const duration = ''



// Khởi tạo hàm toastShow
 function toastShow ({
    title = '',
    message = '',
    type = 'info',
    duration = ''
}) {
   if(main) {
     const icons = {
        // Khởi tạo type của icon
        green: 'fa-solid fa-circle-check',
        error: 'fa-solid fa-circle-xmark',
        warning: 'fa-solid fa-circle-info'
     }
     const icon = icons[type];
     const delay = (duration / 1000 ) 
     
    //  Cấu trúc "div class='toast toast--[type]'"
     const toast = document.createElement('div')
     toast.classList.add('toast', `toast--${type}`)
     toast.style.animation = `slideInLeft 1s ease-in-out, hideTag 1s ease-in-out ${delay}s forwards`
     toast.innerHTML = `
        <div class="toast__icon"><i class="${icon}"></i></div>
        <div class="toast__body">
             <h3 class="toast__title">${title}</h3>
             <p class="toast__message">${message}</p>
        </div>
        <div class="close"><i class="fa-solid fa-xmark"></i></div>
        <div class="toast__timeLine">
        
        </div>
        `
        main.appendChild(toast)

        // Tự động remove class sau 4s
        const timeOut = setTimeout(function () {
            main.removeChild(toast)
         }, duration + 1000)

        // Khi click vào dấu x thì remove class và clear timeout
        toast.onclick = function (e) {
            if(e.target.closest('.close')) {
                main.removeChild(toast)
            }
            clearTimeout(timeOut)
        }

   }
}


btnShowSuccess.onclick = function showSuccess () {
    // truyển tham số vào toastShow
    toastShow(
        {
            title: 'Saved Successfully',
            message: 'Your change have been saved successfully',
            type:'green',
            duration: 3000
        }
    )
}

btnShowError.onclick = function showErrorToast () {
    // truyền tham số vào toastShow
    toastShow(
        {
            title: 'Something Was Wrong',
            message: 'Your change have been unsaved',
            type:'error',
            duration: 3000
        }
    )
}



