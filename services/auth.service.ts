import { apiRequest } from "./api";

export async function registerUser(
  fullName: string,
  email: string,
  password: string,
) {
  return await apiRequest("auth/register", "POST", {
    fullName,
    email,
    pswd: password,
  });
}

export async function loginUser(email: string, password: string) {
  return await apiRequest("auth/login", "POST", {
    email,
    pswd: password,
  });
}

export async function getWelcomeMessage(token: string) {
  return await apiRequest("welcome", "GET", undefined, token);
}
