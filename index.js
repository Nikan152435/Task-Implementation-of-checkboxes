// Находим нужные элементы чекбоксов
const mainCheckbox = document.getElementById('main-checkbox');
const subCheckboxes = document.querySelectorAll('.sub-checkbox');

// Преобразуем NodeList в массив
const subCheckboxesArray = Array.from(subCheckboxes);

// Добавляем обработчики события для всех подчекбоксов
subCheckboxesArray.forEach(subCheckbox => {
  subCheckbox.addEventListener('change', function() {
    // Проверяем, выбраны ли все подчекбоксы
    const allSubCheckboxesChecked = subCheckboxesArray.every(cb => cb.checked);
    
    // Если все подчекбоксы выбраны, устанавливаем галку на главном чекбоксе
    mainCheckbox.checked = allSubCheckboxesChecked;

    // Если хотя бы один из подчекбоксов не выбран, делаем главный чекбокс неактивным
    if (!allSubCheckboxesChecked) {
      mainCheckbox.checked = false;
      mainCheckbox.disabled = true;
    } else {
      // Если все подчекбоксы выбраны, активируем главный чекбокс
      mainCheckbox.disabled = false;
    }
  });
});

// Добавляем обработчик события для главного чекбокса
mainCheckbox.addEventListener('change', function() {
  // Если главный чекбокс выбран, устанавливаем галки на всех подчекбоксах
  subCheckboxesArray.forEach(subCheckbox => {
    subCheckbox.checked = mainCheckbox.checked;
  });
});

// Решение эксперта

const mainCheckbox = document.getElementById("main-checkbox");
const subCheckboxes = document.querySelectorAll(".sub-checkbox");

subCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
        mainCheckbox.checked = [...subCheckboxes].every(e => e.checked);
    });
});

mainCheckbox.addEventListener('click', () => {
    subCheckboxes.forEach((checkbox) => {
        checkbox.checked = mainCheckbox.checked;
    });
});
