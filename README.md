Step 1 : docker compose up --build -d
Step 2 : cd app
Step 3 : nano .env.local

===============================================================================
Step 4
Install Node 20.x

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc
nvm install 20
nvm alias default 20
nvm use 20

===============================================================================

Step 5 : npm ci && npm run build
Step 6 : npm start
