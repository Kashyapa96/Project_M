echo "Switching to branch master"
git checkout master

echo "Building App.."
npm run build

echo "Deploying file to server..."
scp -r build/* ubuntu@192.168.134.128:/var/www/192.168.134.128

echo "Done!" 