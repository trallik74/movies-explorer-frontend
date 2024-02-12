export default function errorHandler(error) {
  const errorMap = {
    "400 Bad Request": "Одно из полей заполнено неверно",
    "401 Unauthorized": "Вы ввели неправильный логин или пароль",
    "404 Not Found": "Страница по указанному маршруту не найдена",
    "408 Request Timeout": "Слишком много запросов. Попробуйте позже",
    "409 Conflict": "Пользователь с таким email уже существует",
    "500 Internal Server Error": "На сервере произошла ошибка",
  };

  function getErrorMessage(err) {
    if (typeof err === "object") {
      console.log(`${err.status}: ${errorMap[err.status]}`);
      return errorMap[err.status] || err.message;
    } else {
      console.log(errorMap[err] || err);
      return errorMap[err];
    }
  }

  return getErrorMessage(error);
}
