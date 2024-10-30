package functions

import (
	"encoding/json"
	"os/exec"
)

func GetFileByName(name, path string) (bool, error) {
	cmd := exec.Command("ls", "-la")
	cmd.Dir = path

	file_names, err := cmd.Output()
	if err != nil {
		return false, err
	}

	data, err := FileListToJson(string(file_names))
	if err != nil {
		return false, err
	}

	var files []File

	err = json.Unmarshal(data, &files)
	if err != nil {
		return false, err
	}

	for _, file := range files {
		if file.Name == name {
			return true, nil
		}
	}
	return false, nil
}