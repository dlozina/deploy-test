FROM nginx:alpine

# Add build argument for environment
ARG ENVIRONMENT=prod

# Remove default config to avoid conflicts
RUN rm /etc/nginx/conf.d/default.conf

# Install dig and other networking tools for troubleshooting
RUN apk add --no-cache bind-tools iputils

COPY nginx.conf /etc/nginx/nginx.conf

# Copy environment-specific config and rename it
COPY sites/deploy-test-${ENVIRONMENT}.conf /etc/nginx/sites/deploy-test.conf

# Create SSL directory
RUN mkdir -p /etc/nginx/ssl

EXPOSE 80 443

# Test DNS resolution before starting Nginx
CMD ["sh", "-c", "echo 'Testing DNS resolution:' && ping -c 1 node || echo 'Cannot ping node' && nginx -g 'daemon off;'"]