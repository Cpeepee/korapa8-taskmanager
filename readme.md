STEP 0: create databse a database account in your host.
STEP 1: goto /database/target also /database/task and modify all SQL in all php files to your database info
        for example: (servername-username-password-database variables)
        check and uncommend some lines in the init.phpS.
        
        
STEP 2: goto all php files in /actions and /database and modify database info in lines.

STEP 3: for modify App time to ur time zone goto get_stamp.php files.

**NOTE: one database is for one year so if you want use many years, use postfix like** mydbname_**year2020**.
