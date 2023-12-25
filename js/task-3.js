function updateName() {
            // Отримуємо значення інпута та видаляємо пробіли по краях
            let nameInput = document.getElementById("name-input").value.trim();

            // Отримуємо елемент для виводу імені
            let nameOutput = document.getElementById("name-output");

            // Перевіряємо, чи ім'я не порожнє або не містить лише пробіли
            if (nameInput !== "") {
                nameOutput.textContent = nameInput;
            } else {
                nameOutput.textContent = "Anonymous";
            }
        }