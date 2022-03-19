FROM node:14.17.0 AS builder

# Set working directory
WORKDIR /app

# Copy our node module specification
COPY package.json package.json
COPY yarn.lock yarn.lock

# install node modules and build assets
RUN yarn install --production

# Copy all files from current directory to working dir in image
# Except the one defined in '.dockerignore'
COPY . .

# Set Environment Variable
ARG REACT_APP_HOST_URL
ENV REACT_APP_HOST_URL=$HOST_URL

# Create production build of React App
RUN yarn build

FROM nginx
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
# RUN rm -rf *

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build .
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'