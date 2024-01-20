### Run frontend
```sh
cd front/

pnpm i
pnpm dev
```
> Open http://localhost:5173/

### Run backend
```sh
cd ../back/

composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```
> Open http://localhost:8000/

### Setup database (Tested on MySQL)
- Useful VSCode extensions:
  - rangav.vscode-thunder-client (api testing)
  - cweijan.vscode-database-client2 (database GUI)
- Adjust `.env` according to your setup
```sh
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306

DB_DATABASE=<database_name> 
DB_USERNAME=<db_username> 
DB_PASSWORD=<db_password> 
``` 
- Run migrations 
``` 
php artisan migrate 
``` 