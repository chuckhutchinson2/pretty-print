# pretty-print


[JSON Pretty Print](http://pretty-print-ui-dev-alb-ecs-169084364.us-east-1.elb.amazonaws.com/) is a sample groovy REST project to pretty print a JSON string.


The ui is written in Angular2.

It also has the terraform scripts to build and deploy the service to an AWS ECS container.  

The pretty print service is deployed on [Docker Hub](https://hub.docker.com/r/chuckh/pretty-print/).

The base docker image is built and deployed on [Docker Hub](https://hub.docker.com/r/chuckh/rhel7-jdk/). It is based on Red Hat Linux 7 with JDK 1.8.0_121 and can be found in my [docker-examples project](https://github.com/chuckhutchinson2/docker-examples/tree/master/rhel7-java)

The angular2 ui is deployed on nginx in a separate [docker image](https://hub.docker.com/r/chuckh/pretty-print-ui/)..  There is a separate set of terraform scripts to build the UI's cluster.