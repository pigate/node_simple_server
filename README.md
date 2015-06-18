Simple Event Logger

proj3 is our simple event logger.
We post json data to our base url and it writes the json data into a log file suffixed with the date.

This will be used in the future for, say, perhaps a hadoop implementation.

For now, we have an extremely simple data pipeline:

app -> SimpleEventLogger
           \> log_date 
