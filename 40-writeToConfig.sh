RUNTIME_CONF="apiKeys = {
  \"SERVICE_ID\": \"$SERVICE_ID\",
  \"TEMPLATE_ID\": \"$TEMPLATE_ID\",
  \"USER_ID\": \"$USER_ID\"
}"

echo "$RUNTIME_CONF" > /usr/share/nginx/html/src/config.js