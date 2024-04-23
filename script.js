document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form[name="second"]');
    const numbers = /^\d+$/;
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const inputs = form.querySelectorAll("input[type='text'], input[type='tel'], input[type='number']");
        let formIsValid = true;
        let formData = {};
        
        inputs.forEach(function(input) {
            const value = input.value.trim();
            const errorMessage = input.parentElement.querySelector('.error');

            errorMessage.textContent = "";

            const inputType = input.type;
            const inputValue = input.value;

            switch(inputType) {
                case "text":
                case "tel":
                case "datetime-local":
                case "number":
                    formData[input.id] = value;
                    break;
                default:
                    break;
            }

            if (inputType === "text") {
                if (inputValue === "") {
                    errorMessage.textContent = "Введите только буквы";
                    formIsValid = false;
                } 
            } else if (inputType === "tel") {
                if (inputValue === "" || !inputValue.match(numbers)) {
                    errorMessage.textContent = "Введите номер телефона в формате 8-ХХХ-ХХХ-ХХ-ХХ";
                    formIsValid = false;
                }
            }
            else if (inputType === "number") {
                if (inputValue === "") {
                    errorMessage.textContent = "Заполните поле";
                    formIsValid = false;
                } else if (parseInt(inputValue) <= 0) {
                    errorMessage.textContent = "Введите число больше 0";
                    formIsValid = false;
                }
            }
        });

    if (formIsValid) {
        const result = confirm("\n\nХотите отправить эти данные?");
        if (result) {
            form.submit();
        }
    }
});

form.querySelectorAll("input[type='text'], input[type='tel'], input[type='number']").forEach(function(input) {
    input.addEventListener("input", function() {
        const errorMessage = input.parentElement.querySelector('.error');
        errorMessage.textContent = "";
    });
});

});



//Изменение бэкграунда "Форма заказа продукта или услуги"

document.addEventListener("click", function(e)
{
  if_id = e.target.id;
  if(if_id == "dasha123")
  {
    if_id = document.getElementById(if_id);
    if(if_id.style.background == "violet")
    {
        if_id.style.background = "#e9f6ff";
    }
    else
    {
        if_id.style.background = "violet";
    }
  }
});



//Вращение логотипа (в самом верху сайта)

document.addEventListener("DOMContentLoaded", function() {
    const logoImg = document.querySelector(".logo");
    let rotated = false;
    logoImg.addEventListener("click", function() {
        let currentRotation = rotated ? "rotate(0deg)" : "rotate(360deg)";
        logoImg.style.transition = "transform 1s ease";
        logoImg.style.transform = currentRotation;
        
        rotated = !rotated;
    });
});





