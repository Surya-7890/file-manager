<!-- # README

## About

This is the official Wails React-TS template.

You can configure the project by editing `wails.json`. More information about the project settings can be found
here: https://wails.io/docs/reference/project-config

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

## Building

To build a redistributable, production mode package, use `wails build`. -->

### Quick Note

This project is initially focused on development for Linux environment.

# Gettting Started

The first step would be to install wails. Run the following command to install wails.

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

Please verify that you have Go 1.18+ installed

## System Check

Run the following command to verify if you have the correct dependencies installed. 

If not, it will advise on what is missing and help on how to rectify any problems.

```bash
wails doctor
```

## Cloning and Starting Development

```bash
git clone https://github.com/Surya-7890/file-manager.git file-manager
```

```bash
cd file-manager/
go mod tidy
```

```bash
cd frontend
npm install
```

```bash
cd ../
wails dev
```