package functions

import (
	"encoding/json"
	"errors"
	"fmt"
	"strings"
)

type File struct {
	Permissions string `json:"permissions"`
	Links       int    `json:"links"`
	User        string `json:"user"`
	Group       string `json:"group"`
	Size        int64  `json:"size"`
	Date        string `json:"date"`
	Time        string `json:"time"`
	Name        string `json:"name"`
	Type        string `json:"type"`
}

var (
	FileType = map[string]string{
		"d": "Directory",
		"-": "File",
		"l": "Symbolic Link",
		"b": "Block Device",
		"c": "Character Device",
		"s": "Socket",
		"p": "Named Pipe",
	}
)

func FileListToJson(data string) ([]byte, error) {
	var files []File

	lines := strings.Split(data, "\n")

	for _, line := range lines {

		if line == "" || strings.HasPrefix(line, "total") || strings.HasPrefix(line, "set nocompatible") {
			continue
		}

		fields := strings.Fields(line)

		if len(fields) < 9 {
			return []byte(""), errors.New("invalid file data " + line)
		}

		links := 0
		size := int64(0)
		date := ""
		time := ""
		name := ""

		fmt.Sscanf(fields[1], "%d", &links)
		fmt.Sscanf(fields[4], "%d", &size)

		if len(strings.Split(fields[7], ":")) > 1 {
			date = fields[5] + " " + fields[6]
			time = fields[7]
			name = strings.Join(fields[8:], " ")
		} else {
			date = fields[5] + " " + fields[6] + " " + fields[7]
			time = fields[8]
			name = strings.Join(fields[9:], " ")
		}

		fmt.Println(string(name[0]))

		fileData := File{
			Permissions: fields[0],
			Links:       links,
			User:        fields[2],
			Group:       fields[3],
			Size:        size,
			Date:        date,
			Time:        time,
			Name:        name,
			Type:        FileType[string(fields[0][0])],
		}

		files = append(files, fileData)
	}

	response, err := json.Marshal(files)

	return response, err
}
