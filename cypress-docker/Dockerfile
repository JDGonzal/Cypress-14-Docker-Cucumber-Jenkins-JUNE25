FROM cypress/included:latest
WORKDIR /app
COPY . /app
RUN npm i
RUN npx cypress verify
CMD [ "npx", "cypress", "run" ]