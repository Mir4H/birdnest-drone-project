# Birdnest project
Web App showing drones that violate birdnest NDZ based on gathered data. Created with Node.js, Express.js & PostgreSQL backend and ReactJS front.
You can see it in action here: https://birdnest-drone-project-mh.fly.dev/

### About
There is monitoring for all drones flying within an area of 500x500 square meters, and a No Drone Zone around the birdnest located in the center with a 100 meter radius. 
The backend processes data from two endpoints that serve data on all drones and the pilots who fly them. The backend then serves data only on drones violating the NDZ.
The frontend shows a frequently updated list of all drones that have violated the NDZ in the last 10 minutes with the pilot information and closest distance to the birdnest. 
A simple visualisation of the situation in the NDZ is also provided. 
![image](https://user-images.githubusercontent.com/77398611/212603794-330d3b6c-e6ef-4e30-a8c2-defa78564088.png)

### Installing
If you would like to have this project running on your computer you should check the readme files of the backend and frontend directories for instructions. 

### Notes
The Canvas is not responsive at the moment, therefore the mobile user experience needs improving. 
