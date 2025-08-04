deploy-rancher-desktop-kubernets:
	docker build -t bashofmann/nodejs-demo-app:latest .
	helm upgrade --install nodejs-demo-app chart/ --namespace default --set image.tag=latest

