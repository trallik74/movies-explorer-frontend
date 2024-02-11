function getErrorMessage(res) {
  return res.json().then((err) => {
    return err.message || "Что то пошло не так...";
  });
}

export async function getResponseData(res) {
  if (res.ok) {
    return res.json();
  } else {
    try {
      return Promise.reject({
        status: `${res.status} ${res.statusText || ""}`,
        message: await getErrorMessage(res),
      });
    } catch (err) {
      throw new Error("Что то пошло не так...");
    }
  }
}
