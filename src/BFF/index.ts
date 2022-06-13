import { Task } from "../../types";

export async function getData(): Promise<Task[]> {
  const res = await fetch("http://localhost:8080/get-user");
  console.log(res);

  const json = await res.json();
  return json;
}

export function getDataFromLocalStorage(): string {
  // TODO: split into diff functions with error handling
  return JSON.parse(atob(localStorage.getItem("data")));
}

export function saveDataToLocalStorage(data64: string) {
  localStorage.setItem("data", data64);
}

export async function addTask(task: Task): Promise<Task[]> {
  console.log("fetch add-task");
  console.log(JSON.stringify(task));
  const res = await fetch("http://localhost:8080/add-task", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const json = await res.json();

  console.log(json);
  return json;
}

export function getUser(): any {}

export function getBalance(): any {}
