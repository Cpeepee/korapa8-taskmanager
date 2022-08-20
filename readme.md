## **NOTE: database design is trash!**.


# How to Setup this project:

STEP 0: create databse a database account in your host.
STEP 1: goto /database/target also /database/task and modify all SQL in all php files to your database info
        for example: (servername-username-password-database variables)
        check and uncommend some lines in the init.phpS.
        
        
STEP 2: goto all php files in /actions and /database and modify database info in lines.

STEP 3: for modify App time to ur time zone goto get_stamp.php files.

STEP 4: goto /database/task/init.php modify database_year_**x** replace current year with x.
____________________________________
### Example :<br/>
    create_months_to_this_year('2021'); ->  create_months_to_this_year('2023'); 



SETP 5: goto /database/target/init.php modify database_year_**x** repalce next year with x.
____________________________________
### Example :<br/>
    create_database_for_this_year_target('2022'); change to -> '2029'
    create_months_to_this_year_target('2022'); change to -> '2029'



SETP 5: goto /database/task and /database/target run init.php file for create databse files.


**NOTE: one database is for one year so if you want use many years, use postfix like** mydbname_**year2020**.

# Dashboard
![screenshot-from-unknow-version](http://mewware.com/mewware/p-taskmanager-sss/version-unknown/Screenshot%20from%202021-01-20%2004-46-49.png)
![screenshot-from-unknow-version](http://mewware.com/mewware/p-taskmanager-sss/version-unknown/Screenshot%20from%202021-01-20%2004-46-54.png)

# Tasks
![screenshot-from-unknow-version](http://mewware.com/mewware/p-taskmanager-sss/version-unknown/Screenshot%20from%202021-01-20%2004-45-59.png)
![screenshot-from-unknow-version](http://mewware.com/mewware/p-taskmanager-sss/version-unknown/Screenshot%20from%202021-01-20%2004-46-03.png)
![screenshot-from-unknow-version](http://mewware.com/mewware/p-taskmanager-sss/version-unknown/Screenshot%20from%202021-01-20%2004-45-51.png)

![screenshot-from-unknow-version](http://mewware.com/mewware/p-taskmanager-sss/version-unknown/Screenshot%20from%202021-01-20%2004-47-08.png)

![screenshot-from-unknow-version](http://mewware.com/mewware/p-taskmanager-sss/version-unknown/Screenshot%20from%202021-01-20%2004-47-35.png)

![screenshot-from-unknow-version](http://mewware.com/mewware/p-taskmanager-sss/version-unknown/Screenshot%20from%202021-01-20%2004-48-24.png)
![screenshot-from-unknow-version](http://mewware.com/mewware/p-taskmanager-sss/version-unknown/Screenshot%20from%202021-01-20%2004-51-32.png)


# Targets
![screenshot-from-unknow-version](http://mewware.com/mewware/p-taskmanager-sss/version-unknown/Screenshot%20from%202021-01-20%2004-46-11.png)
![screenshot-from-unknow-version](http://mewware.com/mewware/p-taskmanager-sss/version-unknown/Screenshot%20from%202021-01-20%2004-46-30.png)
![screenshot-from-unknow-version](http://mewware.com/mewware/p-taskmanager-sss/version-unknown/Screenshot%20from%202021-01-20%2004-46-37.png)
