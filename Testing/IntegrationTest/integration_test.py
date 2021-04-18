# Import webdriver module.
from selenium import webdriver

# Import GeckoDriverManager module.
from webdriver_manager.firefox import GeckoDriverManager

# include wait ability
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException

# time module
import time

# Install the GeckoDriverManager to run FireFox web browser.
driver = webdriver.Firefox(executable_path=GeckoDriverManager().install()) 




# test
# ----

# navigate to site
driver.get("http://pinplay.me/")


# click spotify login button
pinplay_login_button = driver.find_element_by_class_name( "_3xrlJ" )
pinplay_login_button.click()


# login to spotify on pinplay.me
    # initialize variables
username = "j_penney"
password = "formattedSpotify"

    # find username field 
username_field = driver.find_element_by_id( "login-username" )

    # send username to fiels
username_field.send_keys( username )


     # find username field 
password_field = driver.find_element_by_id( "login-password" )

    # send username to fiels
password_field.send_keys( password )
 

# login to spotify on spotify
    # find spotify login button 
spotify_login_button = driver.find_element_by_id( "login-button" )

    # click spotify login button
spotify_login_button.click()


# verify login
timeout = 5
try:
    element_present = EC.presence_of_element_located((By.CLASS_NAME, '_3xrlJ'))
    WebDriverWait(driver, timeout).until(element_present)

except TimeoutException:
    print ("Timed out waiting for page to load")


# click login button again
pinplay_login_button = driver.find_element_by_xpath( "/html/body/div/div/div[1]/div[1]/div/button" )
pinplay_login_button.click() 


timeout = 3
try:
    element_present = EC.presence_of_element_located((By.CLASS_NAME, '_3xrlJ'))
    WebDriverWait(driver, timeout).until(element_present)

except TimeoutException:
    print ("Timed out waiting for page to load")


# create a playlist
create_playlist_button = driver.find_element_by_class_name( "ClickHere" )
create_playlist_button.click()


# choose filters
    # choose a city
chosen_city = driver.find_element_by_xpath("/html/body/div/div/div[2]/div/div/div/form/div[1]/div/select/option[4]")
chosen_city.click()

    # choose explicit filter radio button
explicit_radio = driver.find_element_by_xpath( "/html/body/div/div/div[2]/div/div/div/form/div[2]/p[1]/input" )
explicit_radio.click()

    # choose genre
chosen_genre = driver.find_element_by_xpath( "/html/body/div/div/div[2]/div/div/div/form/div[3]/div/select/option[8]" )
chosen_genre.click()

    # submit filter choices
filter_submit_button = driver.find_element_by_xpath( "/html/body/div/div/div[2]/div/div/div/form/button" )
filter_submit_button.click()


# wait
time.sleep(15)


# log user out
logout_button =driver.find_element_by_xpath( "/html/body/div/div/div[1]/div[1]/div/div/div[2]/button" )
logout_button.click()
 
