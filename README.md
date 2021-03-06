# [JSON Pretty Print](http://pretty-print-ui-dev-alb-ecs-169084364.us-east-1.elb.amazonaws.com/) 


[JSON Pretty Print](http://pretty-print-ui-dev-alb-ecs-169084364.us-east-1.elb.amazonaws.com/) is a sample [groovy](http://groovy-lang.org/) , [SpringBoot](https://spring.io/guides/gs/spring-boot/) REST project to pretty print a JSON string. The REST service's container is stored on [Docker Hub](https://hub.docker.com/r/chuckh/pretty-print/). The base docker image is built and stored on [Docker Hub](https://hub.docker.com/r/chuckh/rhel7-jdk/) and is based on Red Hat Linux 7 with JDK 1.8.0_121 and can be found in my [docker-examples project](https://github.com/chuckhutchinson2/docker-examples/tree/master/rhel7-java). 

This project also has the [terraform](https://www.terraform.io/) scripts to build and deploy the service to an [AWS ECS container](https://github.com/chuckhutchinson2/pretty-print/tree/master/aws). The [ui](https://github.com/chuckhutchinson2/pretty-print/tree/master/pretty-print-ui) is written in [Angular2](https://angular.io/).  The angular2 ui is deployed on [nginx](https://nginx.org/en/) in a separate [docker image](https://hub.docker.com/r/chuckh/pretty-print-ui/).   There is a separate set of [terraform scripts](https://github.com/chuckhutchinson2/pretty-print/tree/master/aws-ui)  to build the UI's cluster.

 