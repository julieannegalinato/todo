#**TO-DO-LIST: A Web Application Using Python** :+1:

##
<b>Project Status:<i>Not Yet Completed</i></b>

##To Do List Web Application
The project was built using flask as the framework based in python, restful api, ajax for updating the page asynchronously and mongoDB as the database. The main functions of the web application are adding of new task, editing the existing task and deleting task.We used GIT as an aid for the collaboration of the team members

###Table of Contents
* Features
* Requirements
* Libraries
* Development
* Restful API
* Contributors

####Features
*Web Application for Adding, Viewing,Editing and Deleting of to-do-list
*
*
*

####Requirements
######1.	Python 2.7x (with Setup Environment Variable fix)
Download the latest version of Python from the official website:
https://www.python.org/download/releases/2.7/ 

#####For Windows: 
* Windows x86 MSI Installer (2.7.0) (sig)
* Windows X86-64 MSI Installer (2.7.0) [1] (sig)

After downloading the MSI package, run the installer through double clicking and follow the steps laid out by the installation wizard. The package format can be installed easily through the standard GUI.

By default, Python version 2.7 will install at C:\Python27\, however, path fix is needed.
To do the fix:

In the Control Panel, go to Edit Environment Variables for your account. Include:
* PATH=%PYTHONPATH%;
* PYTHONPATH=C:\Python27;

#####2. Flask (with Setup Environment Variable Fix and pip installation)
Preparation:<br/>
a.	In the Control Panel, go to Edit Environment Variables for your account. Include PYTHONPATH=C:\Python27\Scripts.<br/>
b.	The computer must be restarted for the changes to complete.<br/>
c.	To install flask you must first need to install the pip.<br/>

Installation of PIP:<br/>
a.	Copy the codes of distributed_setup.py and paste it in Sublime. The code is provided below.<br/>
b.	Save the file as distributed_setup.py and build the code or simply press Ctrl+b<br/>
c.	Open the command line with administration rights.<br/>
d.	Type in the command line easy_install pip. The process will install the pip.<br/>
e.	After the installation of pip you can now install Flask<br/>

Installation of Flask:<br/>
a.	In the command prompt, type ‘pip install flask’ and press Enter
b.	After the installation, check if the flask is working by running a sample codes.

#####3. Virtual Environment using python
a.Create a folder for project for example "todolistflask"<br/>
b. Open cmd and install by typing <b><i>pip install virtualenv</i></b>
c. On cmd, navigate to the created folder and type <b><i>virtuanenv flask</i></b>
d. activate virtual env:	<i>\flask\Scripts\activate.</i><br/>
e. install extensions by typing the following in cmd:<br/>
<ul>
<li>flask\Scripts\pip install flask</li>
<li>flask\Scripts\pip install flask-login</li>
<li>flask\Scripts\pip install flask-openid</li>
<li>flask\Scripts\pip install flask-mail</li>
<li>flask\Scripts\pip install flask-wtf</li>
<li>flask\Scripts\pip install flask-babel</li>
<li>flask\Scripts\pip install guess_language</li>
<li>flask\Scripts\pip install flipflop</li>
<li>flask\Scripts\pip install coverage</li>
</ul>

#####4.Mongodb version 3.0 or v.3.2
Refer to the online documentation for the installation of mongodb to the link https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

#####5.	Optional for Python Coding:
*	Sublime Text Editor: https://www.sublimetext.com/3
*	Notepad++

#####API Reference


#####Libraries


####Development

####Contributors
* Caburnay, John david [jdcaburnay (git) , @johnca (slack)]- specific task includes developing and refining GUI
* Gonzales, Michael [ikels24 (git) , @michaelgo (slack)] - specific task including the back-end of the web app and integrating all the functions 
* Galinato, Julie Anne [julieannegalinato (git) , @julieannemg (slack) - specific task include development and database
* Lim, Genesis [genesisyeshua (git) , @genesisl (slack)] - specific task include developing and refining GUI
* Manalili, Daniel James [dmanalili9123 (git) , @danielma (slack)] - specific task include test integration of functions and database
