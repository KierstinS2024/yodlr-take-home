import { createUser } from "./api.js";

const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const user = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
  };

  try {
    const result = await createUser(user);
    alert(`User ${result.firstName} registered successfully!`);
    form.reset();
  } catch (err) {
    console.error(err);
    alert("Error registering user. Check the console for details.");
  }
});
