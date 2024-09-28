package watchdog

import "fmt"

type WatchDog struct {
	MsgChannel chan string
}

func NewWatchDog() *WatchDog {
	return &WatchDog{
		MsgChannel: make(chan string, 10),
	}
}

/*
watchdog watches for pwd changes
returns list of files and folders on path change
*/
func (w *WatchDog) Watch() {

	/*
	   path changes are sent through this channel
	   it waits for any message on the channel
	   when a message is received on this channel, we retrive the details and send it to client
	*/
	for msg := range w.MsgChannel {
		fmt.Println(msg)
	}
}
