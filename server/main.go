package main

import (
	"fmt"
	"net/http"
)

func handleFunc(w http.ResponseWriter, r *http.Request) {
	switch r.URL.Path {
		case "/":
			fmt.Fprint(w, "Main Page")
		default:
			fmt.Fprint(w, "Other Page")
	}
}

func main() {
	http.HandleFunc("/", handleFunc)
	http.ListenAndServe(":3000", nil)
}