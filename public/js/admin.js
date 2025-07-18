import { getAllUsers } from "./api.js";

const tableBody = document.querySelector("#userTable tbody");

function renderUserRow(user) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${user.id}</td>
    <td>${user.email}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.state}</td>
  `;
  return tr;
}

async function loadUsers() {
  try {
    const users = await getAllUsers();
    tableBody.innerHTML = ""; // Clear existing
    users.forEach((user) => {
      tableBody.appendChild(renderUserRow(user));
    });
  } catch (err) {
    console.error("Failed to load users:", err);
    tableBody.innerHTML = `<tr><td colspan="5">Error loading users</td></tr>`;
  }
}

// Run on page load
loadUsers();
