package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type User struct {
	Name    string `json:"name"`
	Balance int    `json:"balance"`
	Tasks   []Task
}

type Task struct {
	Date   string `json:"date"`
	ID     int    `json:"ID"`
	Type   string `json:"type"`
	UserId int    `json:"userId"`
	Title  string `json:"title"`
	Price  int    `json:"price"`
}

func main() {
	http.HandleFunc("/get-user", handleUser)
	fmt.Printf("Server listen on 8080 port\n")
	http.ListenAndServe(":8080", nil)
}

func handleUser(w http.ResponseWriter, req *http.Request) {
	task1 := Task{
		Date:   "2021-06-19T21:00:00.000Z",
		ID:     1,
		Type:   "TASK",
		UserId: 1,
		Title:  "First Task",
		Price:  100}
	task2 := Task{
		Date:   "2021-07-19T21:00:00.000Z",
		ID:     2,
		Type:   "TASK",
		UserId: 1,
		Title:  "SecondTask",
		Price:  200}
	user := &User{Name: "Max", Balance: 100, Tasks: []Task{task1, task2}}
	fmt.Println("Handle user", user)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	userJSON, err := json.Marshal(user)
	if err != nil {
		fmt.Println(err)
		return
	}
	w.Write(userJSON)
}
