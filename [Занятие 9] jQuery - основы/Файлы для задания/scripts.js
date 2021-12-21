/**
 * Задание 1
 *
 * Написать функцию modifyArticle, которая принимает на входе уже выбранный элемент статьи.
 * Функция должна поменять дату публикации статьи на текущую, а также подкрашивать заголовок в красный цвет
 * @param element {jQuery|HTMLElement}
 */
function modifyArticle(element) {

}

/**
 * Задание 2
 * Написать функцию createArticleTpl, которая принимает четыре параметра и возвращает шаблон по аналогии статьи
 * @param title {string} - Название статьи
 * @param text {string} - текст статьи
 * @param author {string} - автор статьи
 * @param date {Date} - дата публикации
 * @returns {jQuery|HTMLElement}
 */
function createArticleTpl(title, text, author, date) {
  let newArticle;
  return newArticle
}

/**
 * Задание 3
 * Написать функцию initForm, которая будет производить инициализацию обработки формы
 * Сделать обработку форму добавления новой статьи.
 * При заполнении формы и нажатии на кнопку "add article" новая статья должна вставляться в начало блока списка статей,
 * использовать ранее написанную функцию createArticleTpl
 * @param selector {string} - селектор формы
 */
function initForm(selector) {

}

/**
 * Задание 4
 * Доработать код:
 * При добавлении статьи - новая статья должна плавно появляться при добавлении
 * Раскоментировать кнопку  <button class="btn btn-primary" id="show-form-block">show form</button>,
 * при клике по ней форма должна показываться/скрываться
 **/

/**
 * Задание 5
 * Подключение функционала "лайков"
 * Сделать, чтобы при клике по кнопке add-like счетчик лайков (текст кнопки) увеличивался на
 * @param element - кнопка
 */
function addLike(element) {

}
