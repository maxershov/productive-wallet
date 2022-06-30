package main

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

type task struct {
	Id     int
	Date   string
	Type   string
	Price  int
	UserId int
	Title  string
}

func ReadData() {
	fmt.Printf("readDb")
	db, err := sql.Open("sqlite3", "data.db")
	if err != nil {
		panic(err)
	}
	rows, err := db.Query("select * from Tasks")
	if err != nil {
		panic(err)
	}
	defer rows.Close()
	tasks := []task{}

	for rows.Next() {
		p := task{}
		err := rows.Scan(&p.Id, &p.Date, &p.Type, &p.Price, &p.UserId, &p.Title)
		if err != nil {
			fmt.Println(err)
			continue
		}
		tasks = append(tasks, p)
	}
	for _, p := range tasks {
		fmt.Println(p.Id, p.Date, p.Type, p.Price, p.UserId, p.Title)
	}
	fmt.Println(tasks) //
}
