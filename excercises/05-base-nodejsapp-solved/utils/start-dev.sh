#!/bin/bash
docker run -ti -p 5000:5000 -v $(pwd)/nodeapp:/app nodeenv start-dev
