const fields = document.querySelectorAll(".field");
const inputFields = document.querySelectorAll(".field input, .field textarea");
const btnSend = document.querySelector(".btn-send");

btnSend.addEventListener("click", () => {

  validateFields();
  validateAndSubmitForm();
});

function validateFields() {
  fields.forEach((field, index) => {
    if (inputFields[index].value === "") {
      field.classList.add("empty");
      return;
    } else {
      field.classList.remove("empty");
    }
  });
}

function validateAndSubmitForm() {
  const numberOfFilledFields = Array.from(fields).filter(
    (field) => !field.classList.contains("empty")
  ).length;

  if (numberOfFilledFields === 4) {
    inputFields.forEach((input) => (input.value = ""));
    alert("Form submitted successfully!");
  }
}