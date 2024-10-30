package main

import (
	"embed"
	"fmt"
	"os"

	a "file-manager/app"
	"file-manager/app/data"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()
	application := a.NewApplication()

	go generateCss()

	// Create application with options
	err := wails.Run(&options.App{
		Title: "file-manager",
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
			application,
		},
		WindowStartState: 1,
	})

	if err != nil {
		println("Error:", err.Error())
	}
}


func generateCss() {
	dir, err := os.Getwd()
	fmt.Println("----------------", dir)
	if err != nil {
		panic(err)
	}

	if len(dir) <= 0 {
		return
	}

	if dir[len(dir) - 1] == '/' {
		dir += "frontend/src/components/main/css/"
	} else {
		dir += "/frontend/src/components/main/css/"
	}
	
	bytes, err := os.ReadFile(dir+"fa.module.css")
	if err != nil {
		return
	}

	if len(string(bytes)) > 0 {
		fmt.Println("---------------------------- content present -----------------------", len(string(bytes)))
		return
	}
	fmt.Println("---------------------------- content NOT present -----------------------")
	data.GenerateCSS()
}