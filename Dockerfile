FROM node:20-alpine
ARG COMMAND
WORKDIR /app


#Override the entry poinr from node image to make this work
ENTRYPOINT [""]

# We cannot direclty use the ARG in the command so we save it as
# environment variable and use it in the command then
ENV APP_CMD=${COMMAND}
CMD yarn ${APP_CMD}


