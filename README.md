# JSMOLD
## Initialize a Javascript Project

Add Default files to you project quickly and easily

You can completly remove and/or add your own default files to the list.


### Command Line Options

- `-a, --add` Add any file to default list
- `-r, --remove` Remove any file from default list
- `-u, --update` Update any file from default list
- `-l, --list` Show default list 
- `-v, --version` Show version
- `-h, --help` Show help

``` 
$ jsmold -h

Usage: jsmold [options] [<file>|<folder>]

	-i, --init <folder>
		Initialize project and use default 
	
	-I	<folder>
		Initialize project and prompt for each file
		
	-a, --add <file>		
		Add a file to default list
	
	-r, --remove <file>		
		Remove a file from default list
	
	-u, --update <file>	
		Update a file from default list
	 
	-l, --list			
		List all files
	
	-h, --help			
		Display command options
		
	-v, --version
		Display version

```


### Default Files

- `.jshintrc`
- `.jshintignore`
- `.gitignore`
- `.editorconfig`
- `.jscsrc`

