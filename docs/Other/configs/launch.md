# Vscode дебаг chrome


launch.json: 
```
// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387

{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3002",
            "webRoot": "${workspaceFolder}",
            "userDataDir": "${workspaceRoot}/.chrome",
            "sourceMapPathOverrides": {
                "webpack:///./src/*": "${webRoot}/*"
            }
        }
    ]   
}
```

2023-02-12
