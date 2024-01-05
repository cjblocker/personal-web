Title: Lytro Microlens Array Shots
Date: 2018-08-08 8:05

In 2012, Lytro released the first Light field camera for consumers. 
These oddly shaped cameras were a bit of a novelty,
as they could only export 1MP images despite having a 14.4MP imaging sensor.
These extra pixels are what enabled the image to dynamically refocus after a photo was taken.
Unfortunately, this advance in technology was mostly unsuccessful at capturing any of the camera market and Lytro has ceased operations.
Fortunately though, these camera are now much cheaper than they were originally were and I have been able to pick up several on eBay for taking apart.

Most of the teardown is what you'd expect for any modern piece of electronics: Circuit boards with little black chips and a LiPo battery. But, of course, there is one thing that makes this camera special -- the imaging sensor and microlens array. At first glance, the sensor does not look special.
So I fired up my metallurgical microscope to take a closer look.


![Lytro Microlens Array]({attach}/blog/die-shots/lytro_lenselet_1.jpg)

This sensor contains approximately 130,000 individual microlenses at about a 14μm pitch.
That is just a little less than 10 pixels across for this camera.
It can be difficult to see the microlens array in front of the senor because the pixels are so good at absorbing light. But as we look at the edge of the array where the microlenses overlap the substrate, we get a better look at there hexagonal tessellating structure. Here is a zoomed in shot.

![Lytro Microlens Array]({attach}/blog/die-shots/lytro_lenselet_2.jpg)

It is unfortunate that these cameras are no longer supported. Though another company, Raytrix, is still producing light field cameras, they are focused on industrial applications and no other good options exist for general consumers. Hopefully the open source community will be able to provide support of these interesting cameras.
