package app

import "file-manager/app/functions"

type Application struct {
	CurrentLocation string
}

func NewApplication() *Application {
	return &Application{
		CurrentLocation: "~",
	}
}

func (a *Application) ChangeDirectory(path string) {
	functions.TraverseDirectories(path)
}
