# Deploy Test - Infrastructure Test

## Create the password file
htpasswd -c .htpasswd testuser

## Start the development environment
docker-compose -f docker-compose.dev.yml up -d

## After GitHub Actions builds your images
### Pull and start the production containers
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d