#!/bin/bash
docker run -ti --entrypoint bash -p 5000:5000 -v $(pwd)/nodeapp:/app nodeenv
