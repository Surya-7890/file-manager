package functions

import "os"

/*
this function handles all directory traversals
*/
func TraverseDirectories(path string) {
	os.Chdir(path)
}
