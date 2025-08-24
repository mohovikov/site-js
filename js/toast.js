document.querySelectorAll('.toast').forEach(function (toastEl, index) {
    let delay = 3000 + (index * 500)
    let toast = new bootstrap.Toast(toastEl, { delay: delay })
    toast.show()
})