# CreateFiles
Create Files is a simple project Node.js that create files dinamically. You can seetting quantity of files and time interval in seconds that you need.  Once you execute code, the files created before will delete because the new process will create new files.

## Installation 
Clone the repository
```bash
git clone https://github.com/jmsg78/createFiles.git
```
Locate the path where you cloned the repository and you can run
```bash
node src/createFile.js
```
or If You have install nodemon, You could execute it
```bash
nodemon src/createFile.js
```
### Executing code
You can see in the following image to know how the file is executed with nodemon
![Begin](/screenshot/BeginProcess.png)
This image also shows when files have been deleted , because is a process that execute before of create the new files.
### Creating and Reading Files
![CreatingAndReadingFiles](/screenshot/MessageLanguages.png)
This image shows when files have been created, also You can see the messages in different languages, once read it.
les. In this case, the creation of 5 files was requested in an interval of 60 seconds each.
### End
![FinishedProcess](/screenshot/ProcessFinished.png)
When the code creates all the requested files in the established time interval, it sends a process finished message.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
