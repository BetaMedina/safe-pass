use safepassword;

ALTER TABLE `passwords` ADD CONSTRAINT `fk_users_password` FOREIGN KEY ( `userId` ) REFERENCES `users` ( `id` ) ;