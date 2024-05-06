#!/bin/bash
export DISPLAY=:0
active_window_id=$(xdotool getactivewindow)
import -window $active_window_id dist/quote.png
