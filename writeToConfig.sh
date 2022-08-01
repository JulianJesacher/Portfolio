RUNTIME_CONF="{
  \"SERVICE_ID\": \"$SERVICE_ID\",
  \"TEMPLATE_ID\": \"$TEMPLATE_ID\",
  \"USER_ID\": \"$USER_ID\"
}"

echo $RUNTIME_CONF > /usr/share/nginx/src/config.json