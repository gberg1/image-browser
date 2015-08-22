Image Browser
====

###Getting Started###
```
	> git clone https://github.com/gberg1/image-browser.git
	> cd image-client
	> npm install
	> gulp

gulp will automatically take you to localhost:8000
```
You will need to obtain an apiKey and apiSecret from Imgur.
Process described below:

1) Navigate to https://api.imgur.com/
2) Create an account
3) Select radio button "Anonymous usage without user authorization"
4) Fill out basic form (takes just a few seconds)
5) Add apiKey and apiSecret to src/utils/config-copy.jsx
6) Change the name of the file to config.jsx
```
