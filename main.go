package main

import (
	"fmt"

	"github.com/gocolly/colly/v2"
)

func main() {
	c := colly.NewCollector()

	c.OnResponse(func(r *colly.Response) {
		fmt.Println(string(r.Body))
	})

	// Start scraping on http://go-colly.org/docs/introduction/start/
	c.Visit("http://go-colly.org/docs/introduction/start/")
}
