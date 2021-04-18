# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestTest4():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_test4(self):
    self.driver.get("http://pinplay.me/")
    self.driver.set_window_size(1258, 815)
    self.driver.find_element(By.CSS_SELECTOR, ".ClickHere:nth-child(1)").click()
    self.driver.find_element(By.NAME, "city").click()
    dropdown = self.driver.find_element(By.NAME, "city")
    dropdown.find_element(By.XPATH, "//option[. = 'LA']").click()
    self.driver.find_element(By.NAME, "explicit").click()
    self.driver.find_element(By.NAME, "genre").click()
    dropdown = self.driver.find_element(By.NAME, "genre")
    dropdown.find_element(By.XPATH, "//option[. = 'party']").click()
    self.driver.find_element(By.CSS_SELECTOR, ".submit").click()
    self.driver.find_element(By.CSS_SELECTOR, ".col-\\*-\\* > button").click()
    self.driver.close()
  
