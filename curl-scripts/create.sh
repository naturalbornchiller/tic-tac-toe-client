# #!/bin/bash

curl --include --request POST 'https://tic-tac-toe-wdi.herokuapp.com/games' \
  --header "Content-Type: application/json" \
  
  --data '{}'