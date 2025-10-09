#!/bin/zsh

case "$1" in
  run)
    echo "Starting MongoDB..."
    brew services run mongodb-community
    ;;
  stop)
    echo "Stopping MongoDB..."
    brew services stop mongodb-community
    ;;
  restart)
    echo "Restarting MongoDB..."
    brew services restart mongodb-community
    ;;
  status)
    brew services list | grep mongodb
    ;;
  *)
    echo "Usage: $0 {start|stop|restart|status}"
    exit 1
    ;;
esac
