export default (files: FileList) => {
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append(`files`, files[i]);
  }

  const options = {
    method: "POST",
    body: formData,
  };

  fetch("http://localhost:8000/images/", options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
};
